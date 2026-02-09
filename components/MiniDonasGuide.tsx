import React from 'react';

interface MiniDonasGuideProps {
    onBack: () => void;
}

const MiniDonasGuide: React.FC<MiniDonasGuideProps> = ({ onBack }) => {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <header className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md shadow-sm">
                <button onClick={onBack} className="text-primary size-10 flex items-center justify-center cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </button>
                <h2 className="text-[#1b120d] dark:text-white text-lg font-bold">Guia de Mini Donuts</h2>
                <div className="w-10"></div>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                {/* PDF Viewer using iframe */}
                <div className="w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                    <iframe
                        src="/guides/mini_donas.pdf#toolbar=0&navpanes=0&scrollbar=0"
                        className="w-full h-full"
                        title="Guia de Mini Donuts"
                    >
                        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                            <p className="mb-4 text-gray-500">Seu navegador não pode exibir este PDF diretamente.</p>
                        </div>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default MiniDonasGuide;
