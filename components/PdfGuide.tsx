import React from 'react';

interface PdfGuideProps {
    onBack: () => void;
    pdfUrl: string;
    title: string;
    downloadName?: string;
}

const PdfGuide: React.FC<PdfGuideProps> = ({ onBack, pdfUrl, title, downloadName = 'guia.pdf' }) => {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <header className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md shadow-sm">
                <button onClick={onBack} className="text-primary size-10 flex items-center justify-center cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </button>
                <h2 className="text-[#1b120d] dark:text-white text-lg font-bold">{title}</h2>
                <div className="w-10"></div>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                {/* Mobile Download Button */}
                <div className="w-full max-w-4xl mb-4 flex justify-end">
                    <a
                        href={pdfUrl}
                        download={downloadName}
                        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg hover:bg-primary-dark transition-colors"
                    >
                        <span className="material-symbols-outlined">download</span>
                        Baixar PDF
                    </a>
                </div>

                {/* PDF Viewer using iframe */}
                <div className="w-full max-w-4xl h-[80vh] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                    <iframe
                        src={pdfUrl}
                        className="w-full h-full"
                        title={title}
                    >
                        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                            <p className="mb-4 text-gray-500">Seu navegador não pode exibir este PDF diretamente.</p>
                            <a
                                href={pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-bold underline"
                            >
                                Abrir PDF
                            </a>
                        </div>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default PdfGuide;
