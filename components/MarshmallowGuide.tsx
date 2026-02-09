import React, { useState } from 'react';
import '../pages/Guide.css';

interface MarshmallowGuideProps {
    onBack: () => void;
}

const MarshmallowGuide: React.FC<MarshmallowGuideProps> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState<'tab1' | 'tab2'>('tab1');
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    const toggleFlip = (index: number) => {
        setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            {/* Header */}
            <header className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <button onClick={onBack} className="text-primary size-10 flex items-center justify-center cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </button>
                <h2 className="text-[#1b120d] dark:text-white text-lg font-bold">Guia Completo</h2>
                <div className="w-10"></div>
            </header>

            <div className="guide-content">
                {/* HEADER SECTION */}
                <div className="guide-header">
                    <div className="main-title">Marshmallows</div>
                    <div className="sub-title">Caseiros</div>
                    <div className="guide-tag">Guia completo sem forno</div>
                </div>

                {/* ALERT */}
                <div className="alert-box">
                    <p className="alert-text">
                        ⚠️ <span style={{ textDecoration: 'underline' }}>IMPORTANTE:</span> Os marshmallows caseiros são sensíveis à
                        umidade. O segredo está em cozinhar a calda no ponto exato e deixar secar muito bem.
                    </p>
                </div>

                {/* INGREDIENTS */}
                <h2 className="section-title">Ingredientes Exatos</h2>
                <div className="grid-4">
                    <div className="card">
                        <div className="card-header">1. Hidratar</div>
                        <ul className="ingredient-list">
                            <li className="ingredient-item"><i className="ri-drop-line"></i> 12g Gelatina</li>
                            <li className="ingredient-item"><i className="ri-cup-line"></i> 60ml Água</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-header">2. Calda</div>
                        <ul className="ingredient-list">
                            <li className="ingredient-item"><i className="ri-spoon-line"></i> 200g Açúcar</li>
                            <li className="ingredient-item"><i className="ri-contrast-drop-line"></i> 120ml Água</li>
                            <li className="ingredient-item"><i className="ri-honey-pot-line"></i> 100g Glicose</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-header">3. Finalizar</div>
                        <ul className="ingredient-list">
                            <li className="ingredient-item"><i className="ri-magic-line"></i> 1 colher chá Baunilha</li>
                            <li className="ingredient-item"><i className="ri-palette-line"></i> Corante Gel</li>
                            <li className="ingredient-item"><i className="ri-shining-line"></i> Pitada de Sal</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-header">4. Polvilhar</div>
                        <ul className="ingredient-list">
                            <li className="ingredient-item"><i className="ri-snowy-line"></i> 100g Açúcar de Confeiteiro</li>
                            <li className="ingredient-item"><i className="ri-seedling-line"></i> 100g Fécula Milho</li>
                        </ul>
                    </div>
                </div>

                {/* PASO A PASO */}
                <h2 className="section-title">Passo a Passo Infalível</h2>
                <div className="step-container">
                    {/* Paso 1 */}
                    <div className="step-card">
                        <div className="step-number">01</div>
                        <h3 className="step-title">Hidratar a Gelatina</h3>
                        <div className="step-content">
                            <p>Misture a gelatina em pó com os 60ml de água fria em uma tigela pequena. Mexa bem e deixe
                                descansar 5-10 minutos até que absorva o líquido e pareça uma "esponja".</p>
                        </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="step-card">
                        <div className="step-number">02</div>
                        <h3 className="step-title">A Calda (Ponto Exato)</h3>
                        <div className="step-content">
                            <p>Em uma panela, coloque açúcar, água e glicose. Leve ao fogo médio sem mexer. <br /><br />
                                <strong>🌡️ Temperatura:</strong> 115°C - 118°C (Ponto bola macia).
                            </p>
                            <div className="tip-box">
                                <div className="tip-title"><i className="ri-lightbulb-flash-line"></i> SEM TERMÔMETRO:</div>
                                <p>Deixe cair um pouco de calda em um copo com água fria. Se conseguir formar uma bolinha macia e
                                    flexível com os dedos, está pronto!</p>
                            </div>
                        </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="step-card">
                        <div className="step-number">03</div>
                        <h3 className="step-title">Bater, Bater, Bater</h3>
                        <div className="step-content">
                            <p>Derreta a gelatina hidratada (microondas 15 seg). Coloque na batedeira. Ligue e adicione a
                                calda quente em forma de fio pela borda.<br /> Aumente para velocidade máxima e bata 8-12 minutos
                                até obter uma mistura branca, brilhante
                                e que forme picos firmes. Adicione baunilha e corante no final.</p>
                        </div>
                    </div>

                    {/* Paso 4 */}
                    <div className="step-card">
                        <div className="step-number">04</div>
                        <h3 className="step-title">Deixar Firmar</h3>
                        <div className="step-content">
                            <p>Unte uma forma e polvilhe com a mistura de pós (Confeiteiro + Maisena). Despeje a mistura, alise
                                rápido e cubra com mais pó.<br /> ⏳ <strong>Tempo:</strong> Deixe descansar 6-8 horas em
                                temperatura ambiente.</p>
                        </div>
                    </div>
                </div>

                {/* MASA MOLDEABLE TABS */}
                <h2 className="section-title">Técnicas de Moldagem</h2>
                <div className="tabs-container">
                    <div className="tab-headers">
                        <button
                            className={`tab-btn ${activeTab === 'tab1' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab1')}
                        >
                            🖐️ Opção 1: Com as Mãos
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'tab2' ? 'active' : ''}`}
                            onClick={() => setActiveTab('tab2')}
                        >
                            🎨 Opção 2: Manga de Confeitar
                        </button>
                    </div>

                    <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}>
                        <p><strong>Perfeito para figuras detalhadas (coelhos, personagens).</strong><br /><br /> 1. Corte um pedaço
                            do marshmallow já firme (descansado 8h).<br /> 2. Amasse com as mãos adicionando pouco a pouco a mistura
                            "antiaderente" (açúcar de confeiteiro + maisena).<br /> 3. O ponto é quando parece massinha: não gruda,
                            estica sem quebrar e mantém a forma.<br /><br />
                            <span className="highlight">DICA:</span> Se secar, adicione uma gotinha de água.
                        </p>
                    </div>
                    <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}>
                        <p><strong>Perfeito para formas rápidas e fluidas.</strong><br /><br /> 1. Use a mistura RECÉM batida (ainda
                            morna e fluida).<br /> 2. Coloque em manga de confeitar com bico redondo.<br /> 3. Faça as formas
                            diretamente sobre uma bandeja com maisena.<br /><br />
                            <span className="highlight">DICA:</span> Trabalhe rápido antes que a gelatina endureça.
                        </p>
                    </div>
                </div>

                {/* CONEJITO SECTION */}
                <div className="accordion-section">
                    <h2 className="section-title" style={{ color: 'var(--pink)' }}>🐰 Moldagem: Coelhinho Detalhado</h2>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'c1' ? 'active' : ''}`} onClick={() => toggleAccordion('c1')}>
                            <span>1. CUERPO (Base)</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'c1' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p><strong>Paso A:</strong> Haz una bolita grande de 3-4 cm (cuerpo). Rueda hasta que esté
                                        lisa.<br />
                                        <strong>Paso B:</strong> Haz una bolita más pequeña de 2 cm (cabeza).<br />
                                        <strong>Unión:</strong> Humedece un pincel con poquita agua, toca el cuerpo y pega la
                                        cabeza encima presionando suavemente.
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <div className="shape-circle" style={{ width: '120px', height: '120px' }}></div>
                                    <div className="shape-circle" style={{ width: '80px', height: '80px', position: 'absolute', top: '40px' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'c2' ? 'active' : ''}`} onClick={() => toggleAccordion('c2')}>
                            <span>2. OREJAS (Forma Gota)</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'c2' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p>Haz 2 gotitas alargadas. Aplástalas un poco con el dedo pero deja volumen en la base.
                                        <br />
                                        <strong>Tip:</strong> Deja secar la cabeza 10 min antes de pegar las orejas para que no
                                        se caigan por el peso. Pégalas ligeramente hacia atrás.
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <div className="shape-drop" style={{ marginRight: '20px' }}></div>
                                    <div className="shape-drop" style={{ transform: 'scaleX(-1) rotate(45deg)' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'c3' ? 'active' : ''}`} onClick={() => toggleAccordion('c3')}>
                            <span>3. PATITAS Y COLITA</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'c3' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p><strong>Patitas:</strong> 2 bolitas pequeñas aplastadas. Pégalas al frente en la base del
                                        cuerpo.<br />
                                        <strong>Colita:</strong> 1 bolita pequeña pegada atrás. Puedes picarla con un palillo
                                        para dar textura de pelaje.
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <div className="shape-circle" style={{ width: '50px', height: '50px' }}></div>
                                        <div className="shape-circle" style={{ width: '50px', height: '50px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'c4' ? 'active' : ''}`} onClick={() => toggleAccordion('c4')}>
                            <span>4. CARITA (Expresión)</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'c4' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p><strong>Ojos:</strong> Bolitas negras minúsculas o plumón comestible.<br />
                                        <strong>Nariz:</strong> Triángulo rosa pequeño.<br />
                                        <strong>Boca:</strong> Marca una "Y" invertida con un palillo o dibuja con tinta negra
                                        comestible.
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <span style={{ fontSize: '100px' }}>🐰</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FLORES FLIP CARDS */}
                <h2 className="section-title" style={{ color: 'var(--dark-purple)' }}>🌺 Moldagem: Flores 3D</h2>
                <div className="flower-grid">

                    {/* Flor 1 */}
                    <div className={`flip-card ${flippedCards[1] ? 'flipped' : ''}`} onClick={() => toggleFlip(1)}>
                        <div className="flip-inner">
                            <div className="flip-front">
                                <i className="ri-flower-line flower-icon"></i>
                                <div className="flower-title">Flor Simples</div>
                                <div className="tap-hint">Toque para ver passos 👆</div>
                            </div>
                            <div className="flip-back">
                                <h3 style={{ marginBottom: '20px', color: 'var(--pink)' }}>Pasos:</h3>
                                <p style={{ fontSize: '24px', lineHeight: 1.5 }}>
                                    1. Faça um centro redondo achatado.<br /> 2. Faça 5 gotinhas para pétalas.<br /> 3. Cole as
                                    pétalas ao redor do centro.<br /> 4. Marque uma linha central em cada pétala com um
                                    palito.<br />
                                    <br /><strong>Secagem:</strong> 2-4 horas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Flor 2 */}
                    <div className={`flip-card ${flippedCards[2] ? 'flipped' : ''}`} onClick={() => toggleFlip(2)}>
                        <div className="flip-inner">
                            <div className="flip-front">
                                <i className="ri-plant-line flower-icon" style={{ color: '#FF8A80' }}></i>
                                <div className="flower-title">Rosa Fácil</div>
                                <div className="tap-hint">Toque para ver passos 👆</div>
                            </div>
                            <div className="flip-back">
                                <h3 style={{ marginBottom: '20px', color: 'var(--pink)' }}>Pasos (Muy Vendida):</h3>
                                <p style={{ fontSize: '24px', lineHeight: 1.5 }}>
                                    1. Faça um conezinho base.<br /> 2. Achate 6-8 bolinhas até fazer discos bem finos
                                    (pétalas).<br /> 3. Enrole a primeira sobre o cone.<br /> 4. Cole as demais intercaladas,
                                    abrindo as bordas para fora.<br />
                                    <br /><strong>Dica:</strong> Corte a base sobrando.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Flor 3 */}
                    <div className={`flip-card ${flippedCards[3] ? 'flipped' : ''}`} onClick={() => toggleFlip(3)}>
                        <div className="flip-inner">
                            <div className="flip-front">
                                <i className="ri-leaf-line flower-icon" style={{ color: 'var(--green)' }}></i>
                                <div className="flower-title">Com Folhas</div>
                                <div className="tap-hint">Toque para ver passos 👆</div>
                            </div>
                            <div className="flip-back">
                                <h3 style={{ marginBottom: '20px', color: 'var(--green)' }}>Pasos:</h3>
                                <p style={{ fontSize: '24px', lineHeight: 1.5 }}>
                                    1. Monte uma flor simples de 5 pétalas.<br /> 2. Faça 2 óvalos verdes e achate.<br /> 3. Marque
                                    as nervuras com um garfo ou palito.<br /> 4. Cole embaixo da flor aparecendo pelos
                                    lados.<br />
                                    <br /><strong>Uso:</strong> Ideal para cupcakes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PERSONAJES UNIVERSAL */}
                <div className="accordion-section">
                    <h2 className="section-title" style={{ color: 'var(--blue)' }}>👧 Personagens: Base Universal</h2>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'p1' ? 'active' : ''}`} onClick={() => toggleAccordion('p1')}>
                            <span>1. ESTRUCTURA (Cabeza y Cuerpo)</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'p1' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p><strong>Cabeza:</strong> Bolita perfecta (3cm).<br />
                                        <strong>Cuerpo:</strong> Elige CONO (para vestidos) o CILINDRO (para pantalones).<br />
                                        <strong>Técnica Palillo Interno:</strong> Para figuras grandes, atraviesa el cuerpo con
                                        un palillo dejando 1cm fuera y clava la cabeza ahí. ¡Estructura firme!
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div className="shape-circle"
                                            style={{ width: '80px', height: '80px', marginBottom: '-10px', zIndex: 2 }}></div>
                                        <div className="shape-cone"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'p2' ? 'active' : ''}`} onClick={() => toggleAccordion('p2')}>
                            <span>2. EXTREMIDADES</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'p2' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p><strong>Brazos:</strong> Mini cilindros de 2cm. Afina en la "muñeca".<br />
                                        <strong>Piernas:</strong> Cilindros más gruesos. Pega en la base.<br />
                                        <strong>Pies/Zapatos:</strong> Bolitas o pequeños óvalos de otro color.
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <div className="shape-cyl" style={{ width: '30px', height: '100px', transform: 'rotate(-20deg)' }}></div>
                                    <div className="shape-cyl"
                                        style={{ width: '30px', height: '100px', transform: 'rotate(20deg)', marginLeft: '20px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className={`accordion-header ${activeAccordion === 'p3' ? 'active' : ''}`} onClick={() => toggleAccordion('p3')}>
                            <span>3. CABELLO Y ROPA</span>
                            <i className="ri-arrow-down-s-line accordion-icon"></i>
                        </div>
                        <div className="accordion-body" style={{ maxHeight: activeAccordion === 'p3' ? '1000px' : '0' }}>
                            <div className="accordion-content">
                                <div className="text-aid">
                                    <p><strong>Cabello:</strong> Aplana masa delgada y corta tiras (planchitas) o haz un "gorro"
                                        de masa y texturiza.<br />
                                        <strong>Ropa:</strong> Añade capas finas sobre el cuerpo base. Agrega lazos (2 gotitas)
                                        o botones (bolitas mini).<br />
                                        <strong>Color:</strong> Tiñe la masa antes de modelar.
                                    </p>
                                </div>
                                <div className="visual-aid">
                                    <i className="ri-shirt-line" style={{ fontSize: '150px', color: 'var(--blue)', opacity: 0.6 }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TIMELINE & TIPS */}
                <h2 className="section-title">Tempos e Cuidados</h2>

                <div className="timeline">
                    <div className="time-point">
                        <span className="time-val">30 min</span>
                        <span className="time-desc">Secagem entre camadas</span>
                    </div>
                    <div className="time-point">
                        <span className="time-val">24 hrs</span>
                        <span className="time-desc">Firme para embalar</span>
                    </div>
                    <div className="time-point">
                        <span className="time-val">48 hrs</span>
                        <span className="time-desc">Dureza total</span>
                    </div>
                </div>

                <div className="tips-grid">
                    <div className="check-item"><i className="ri-checkbox-circle-fill"></i> Mãos bem polvilhadas</div>
                    <div className="check-item"><i className="ri-checkbox-circle-fill"></i> NUNCA refrigerar (umidade)</div>
                    <div className="check-item"><i className="ri-checkbox-circle-fill"></i> Use corante em Gel</div>
                    <div className="check-item"><i className="ri-checkbox-circle-fill"></i> Figuras pequenas vendem melhor</div>
                    <div className="check-item"><i className="ri-checkbox-circle-fill"></i> Evite peças muito grossas</div>
                    <div className="check-item"><i className="ri-checkbox-circle-fill"></i> Secar bem antes de embalar</div>
                </div>

                <div className="storage-container">
                    <div className="storage-card">
                        <i className="ri-archive-line storage-icon"></i>
                        <div className="storage-text">Caixa Hermética</div>
                    </div>
                    <div className="storage-card">
                        <i className="ri-sun-cloudy-line storage-icon"></i>
                        <div className="storage-text">Longe do Sol</div>
                    </div>
                    <div className="storage-card">
                        <i className="ri-shopping-bag-3-line storage-icon"></i>
                        <div className="storage-text">Saco Celofane</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MarshmallowGuide;
