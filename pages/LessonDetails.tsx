
import React from 'react';
import { tutorials } from '../data/tutorials';
import YouTube, { YouTubeProps } from 'react-youtube';

interface LessonDetailsProps {
    onBack: () => void;
    lessonId: string | null;
    onCoursesClick: () => void;
    onFavoritesClick: () => void;
    onFeedClick: () => void;
    onProfileClick: () => void;
    onHomeClick: () => void;
}

const LessonDetails: React.FC<LessonDetailsProps> = ({ onBack, lessonId, onCoursesClick, onFavoritesClick, onFeedClick, onProfileClick, onHomeClick }) => {
    const lesson = tutorials.find(t => t.id === lessonId);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [currentStepId, setCurrentStepId] = React.useState<number>(1);
    const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
    const [playerReady, setPlayerReady] = React.useState(false);
    const playerRef = React.useRef<any>(null);

    // Define isVimeo early so it can be used in useEffects
    const isVimeo = lesson?.videoUrl?.includes('vimeo.com');

    // Effect for YouTube player time tracking
    React.useEffect(() => {
        let interval: NodeJS.Timeout;
        console.log("Effect - isPlaying:", isPlaying, "playerReady:", playerReady);
        if (isPlaying && playerReady && playerRef.current) {
            interval = setInterval(() => {
                if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
                    const currentTime = playerRef.current.getCurrentTime();
                    console.log("Current time:", currentTime);
                    // Find the last step that has started
                    const activeStep = lesson?.steps.slice().reverse().find(step => step.startTime && currentTime >= step.startTime);

                    if (activeStep) {
                        console.log("Active step:", activeStep.id, activeStep.title);
                        setCurrentStepId(activeStep.id);
                        // Mark all previous steps as completed
                        const completedIds = lesson?.steps
                            .filter(step => step.id < activeStep.id)
                            .map(step => step.id) || [];
                        setCompletedSteps(completedIds);
                    } else {
                        // If before first timestamp, stay on first step
                        setCurrentStepId(1);
                    }

                } else {
                    console.error("Player not ready or getCurrentTime not available");
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, playerReady, lesson]);

    // Effect for Vimeo player time tracking
    React.useEffect(() => {
        if (!isVimeo || !isPlaying || !playerReady || !playerRef.current) return;

        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== 'https://player.vimeo.com') return;

            try {
                const data = JSON.parse(event.data);
                if (data.event === 'timeupdate') {
                    const currentTime = data.data.seconds;
                    console.log("Vimeo current time:", currentTime);

                    const activeStep = lesson?.steps.slice().reverse().find(step => step.startTime !== undefined && currentTime >= step.startTime);

                    if (activeStep) {
                        console.log("Active step:", activeStep.id, activeStep.title);
                        setCurrentStepId(activeStep.id);
                        // Mark all previous steps as completed
                        const completedIds = lesson?.steps
                            .filter(step => step.id < activeStep.id)
                            .map(step => step.id) || [];
                        setCompletedSteps(completedIds);
                    }
                }
            } catch (e) {
                // Ignore parsing errors
            }
        };

        window.addEventListener('message', handleMessage);

        // Request timeupdate events from Vimeo
        const iframe = playerRef.current as HTMLIFrameElement;
        iframe.contentWindow?.postMessage(JSON.stringify({
            method: 'addEventListener',
            value: 'timeupdate'
        }), '*');

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [isPlaying, playerReady, isVimeo, lesson]);

    if (!lesson) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
                <p className="text-[#1b120d] dark:text-white mb-4">Aula não encontrada.</p>
                <button onClick={onBack} className="text-primary font-bold">Voltar</button>
            </div>
        );
    }

    const steps = lesson.steps;

    const getYoutubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const getVimeoId = (url: string) => {
        const regExp = /vimeo\.com\/(\d+)/;
        const match = url.match(regExp);
        return match ? match[1] : null;
    };

    const videoId = lesson.videoUrl ? (isVimeo ? getVimeoId(lesson.videoUrl) : getYoutubeId(lesson.videoUrl)) : null;

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        playerRef.current = event.target;
        setPlayerReady(true);
        console.log("Player ready!", event.target);
    };

    const handleStepClick = (step: typeof steps[0]) => {
        if (step.startTime !== undefined) {
            // Mark all previous steps as completed
            const completedIds = lesson?.steps
                .filter(s => s.id < step.id)
                .map(s => s.id) || [];
            setCompletedSteps(completedIds);
            setCurrentStepId(step.id);

            if (isVimeo && playerRef.current) {
                // For Vimeo, use postMessage API
                const iframe = playerRef.current as HTMLIFrameElement;
                const data = {
                    method: 'setCurrentTime',
                    value: step.startTime
                };
                iframe.contentWindow?.postMessage(JSON.stringify(data), '*');
                console.log("Seeking Vimeo to:", step.startTime, step.title);
            } else if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
                // For YouTube
                playerRef.current.seekTo(step.startTime, true);
                console.log("Seeking YouTube to:", step.startTime, step.title);
            }
        }
    };

    const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 1,
        },
    };

    return (
        <div className="flex flex-col pb-32 min-h-screen bg-background-light dark:bg-background-dark">
            {/* Header */}
            <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50">
                <button
                    onClick={onBack}
                    className="text-primary flex size-12 shrink-0 items-center justify-start cursor-pointer hover:translate-x-[-2px] transition-transform"
                >
                    <span className="material-symbols-outlined text-[24px]">arrow_back_ios</span>
                </button>
                <h2 className="text-[#1b120d] dark:text-white text-lg font-bold leading-tight flex-1 text-center">Marshmallows 2.0</h2>
                <div className="flex w-12 items-center justify-end"></div>
            </header>

            {/* Video Player */}
            <div className="p-4 max-w-4xl mx-auto w-full">
                <div
                    className="relative flex items-center justify-center bg-primary/10 bg-cover bg-center aspect-video rounded-2xl overflow-hidden shadow-xl"
                    style={{ backgroundImage: !isPlaying ? `url("${lesson.imageUrl}")` : 'none' }}
                >
                    {!isPlaying ? (
                        <>
                            <div className="absolute inset-0 bg-black/30"></div>
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="relative z-10 flex shrink-0 items-center justify-center rounded-full size-16 bg-white/95 text-primary shadow-2xl active:scale-95 transition-transform"
                            >
                                <span className="material-symbols-outlined fill-icon text-[36px]">play_arrow</span>
                            </button>
                        </>
                    ) : (
                        <div className="absolute inset-0 size-full [&>div]:size-full">
                            {isVimeo ? (
                                <iframe
                                    ref={playerRef}
                                    src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
                                    className="size-full"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    onLoad={() => setPlayerReady(true)}
                                />
                            ) : (
                                <YouTube videoId={videoId || ''} opts={opts} onReady={onPlayerReady} className="size-full" />
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-4xl mx-auto w-full">
                <div className="px-5">
                    <h1 className="text-[#1b120d] dark:text-white tracking-tight text-[28px] font-extrabold leading-tight pt-2">{lesson.title}</h1>
                    <p className="text-[#1b120d]/60 dark:text-white/60 text-sm font-medium leading-relaxed pt-2">{lesson.description}</p>

                    {lesson.ingredients && (
                        <div className="mt-4">
                            <h3 className="text-[#1b120d] dark:text-white text-sm font-bold mb-2">Ingredientes Necessários</h3>
                            <div className="flex flex-col gap-2">
                                {lesson.ingredients.map((ing, index) => {
                                    const [isExpanded, setIsExpanded] = React.useState(false);

                                    return (
                                        <div key={index} className="bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden">
                                            <div
                                                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                                                onClick={() => ing.details && setIsExpanded(!isExpanded)}
                                            >
                                                <span className="material-symbols-outlined text-primary text-lg">{ing.icon}</span>
                                                <span className="text-xs font-medium text-[#1b120d]/80 dark:text-white/80 flex-1">{ing.name}</span>
                                                {ing.details && (
                                                    <span className={`material-symbols-outlined text-primary text-sm transition-transform ${isExpanded ? 'rotate-45' : ''}`}>
                                                        add
                                                    </span>
                                                )}
                                            </div>
                                            {ing.details && isExpanded && (
                                                <div className="px-2 pb-2 pt-0">
                                                    <p className="text-xs text-[#1b120d]/60 dark:text-white/60 leading-relaxed pl-7">
                                                        {ing.details}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="flex flex-col gap-2.5 p-5 mt-2">
                    <div className="flex justify-between items-center">
                        <p className="text-[#1b120d] dark:text-white text-xs font-bold uppercase tracking-widest opacity-80">Progresso da Aula</p>
                        <p className="text-primary text-xs font-black">{currentStepId} de {steps.length} passos</p>
                    </div>
                    <div className="rounded-full bg-marshmallow-pink dark:bg-white/5 h-3.5 overflow-hidden shadow-inner border border-black/5">
                        <div className="h-full rounded-full bg-primary shadow-sm" style={{ width: `${(currentStepId / steps.length) * 100}%` }}></div>
                    </div>
                </div>

                {/* Steps Checklist */}
                <div className="px-5 pt-4">
                    <h3 className="text-[#1b120d] dark:text-white text-lg font-bold mb-5 flex items-center gap-2">
                        Paso a Paso
                        <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                    </h3>
                    <div className="flex flex-col gap-4">
                        {steps.map(step => {
                            const isCompleted = completedSteps.includes(step.id);
                            const isActive = step.id === currentStepId;
                            const isFuture = step.id > currentStepId;

                            return (
                                <div
                                    key={step.id}
                                    onClick={() => handleStepClick(step)}
                                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer hover:scale-[1.02] ${isActive
                                        ? 'bg-marshmallow-pink/40 dark:bg-primary/10 border-primary shadow-md'
                                        : isFuture
                                            ? 'bg-gray-50/50 dark:bg-white/5 border-marshmallow-pink/50 dark:border-white/5 opacity-40'
                                            : 'bg-white dark:bg-white/5 border-marshmallow-pink dark:border-white/10 shadow-sm'
                                        }`}
                                >
                                    <div className={`flex-shrink-0 size-9 rounded-full flex items-center justify-center transition-colors ${isCompleted
                                        ? 'bg-green-100 text-green-600'
                                        : isActive
                                            ? 'bg-primary text-white'
                                            : 'bg-gray-100 dark:bg-white/10 text-gray-400'
                                        }`}>
                                        {isCompleted ? (
                                            <span className="material-symbols-outlined text-[20px] font-bold">check</span>
                                        ) : (
                                            <span className="text-sm font-black">{step.id}</span>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-primary' : 'text-gray-400'
                                            }`}>
                                            {isActive ? 'Próximo Passo' : `Passo ${step.id}`}
                                        </p>
                                        <p className={`font-bold transition-all ${isCompleted
                                            ? 'text-[#1b120d]/40 dark:text-white/30 line-through decoration-primary/40'
                                            : 'text-[#1b120d] dark:text-white'
                                            }`}>
                                            {step.title}
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={isCompleted}
                                            disabled={true}
                                            readOnly
                                            className={`rounded-full border-2 size-6 focus:ring-primary ${isCompleted
                                                ? 'text-primary border-primary'
                                                : 'border-gray-300 dark:border-white/20 bg-transparent'
                                                }`}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom Navigation */}
                <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[400px] bg-white/90 dark:bg-[#1b120d]/90 backdrop-blur-xl shadow-2xl rounded-full px-6 py-3 border border-black/5 flex items-center justify-between z-50">
                    <button onClick={onHomeClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
                        <span className="material-symbols-outlined">home</span>
                        <span className="text-[10px] font-bold">Início</span>
                    </button>
                    <button onClick={onCoursesClick} className="hidden">
                    </button>
                    <button onClick={onFeedClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
                        <span className="material-symbols-outlined">dynamic_feed</span>
                        <span className="text-[10px] font-bold">Comunidade</span>
                    </button>
                    <button onClick={onFavoritesClick} className="flex flex-col items-center gap-1 text-[#9a664c] dark:text-white/40 cursor-pointer hover:text-primary transition-all active:scale-90">
                        <span className="material-symbols-outlined">favorite</span>
                        <span className="text-[10px] font-bold">Conteúdo</span>
                    </button>
                    <button disabled className="flex flex-col items-center gap-1 text-[#9a664c]/40 dark:text-white/20 cursor-not-allowed opacity-50 relative">
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] font-bold px-2 py-1 rounded-full shadow-lg">Manutenção</div>
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-[10px] font-bold">Em breve</span>
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default LessonDetails;

