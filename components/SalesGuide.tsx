import React, { useState } from 'react';
import '../pages/SalesGuide.css';

interface SalesGuideProps {
    onBack: () => void;
}

const SalesGuide: React.FC<SalesGuideProps> = ({ onBack }) => {
    const [checkedDays, setCheckedDays] = useState<Record<number, boolean>>({});

    const toggleDay = (index: number) => {
        setCheckedDays(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const days = [
        { label: 'Dia 1-2', task: 'Criar 10 modelos & Fotos' },
        { label: 'Dia 3', task: 'Catálogo em Stories' },
        { label: 'Dia 4', task: 'Reel Modelando' },
        { label: 'Dia 5', task: 'Reel Embalagem' },
        { label: 'Dia 6', task: 'Agenda Aberta' },
        { label: 'Dia 7', task: 'Promo & Vendas' },
    ];

    return (
        <div className="sales-guide-container">
            <header className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md shadow-sm">
                <button onClick={onBack} className="text-primary size-10 flex items-center justify-center cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </button>
                <h2 className="text-[#1b120d] dark:text-white text-lg font-bold">Guia de Vendas</h2>
                <div className="w-10"></div>
            </header>

            {/* Header Content */}
            <div className="sales-header">
                <div className="header-content">
                    <span className="money-emoji">💖</span>
                    <h1>Guia de Vendas</h1>
                    <h2>Marshmallows Modelados</h2>
                    <div className="subtitle">Como vender em redes sociais e na sua cidade</div>
                </div>
                {/* Decorative blobs */}
                <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '400px', height: '400px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
            </div>

            <div className="sales-container">
                {/* Row 1: Product Definition & Catalog */}
                <div className="grid-2" style={{ marginBottom: '40px' }}>
                    <section className="sales-card sec-green" style={{ background: 'var(--green-light)' }}>
                        <span className="section-number">01</span>
                        <h3 className="section-title"><i className="ri-store-3-line"></i> Defina o que vai vender</h3>
                        <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>Antes de promover, escolha seu "Cardápio" fixo de 3 a 5 produtos estrela.</p>
                        <ul className="check-list">
                            <li><i className="ri-checkbox-circle-fill"></i> Toppers para bolo (Personalizados)</li>
                            <li><i className="ri-checkbox-circle-fill"></i> Lembrancinhas (1-2 figuras + embalagem)</li>
                            <li><i className="ri-checkbox-circle-fill"></i> Mini Kits (3-6 unidades)</li>
                            <li><i className="ri-checkbox-circle-fill"></i> Caixinhas Presente (Tema + Laço)</li>
                            <li><i className="ri-checkbox-circle-fill"></i> Decoração de Mesa (Granel)</li>
                        </ul>
                        <div className="tip-box">
                            <i className="ri-lightbulb-flash-line"></i>
                            <div>
                                <strong>Dica de Início:</strong> Comece com figuras rápidas: 🐰 Coelho, 🌸 Flor, ❤️ Coração, ⭐ Estrela.
                            </div>
                        </div>
                    </section>

                    <section className="sales-card sec-blue" style={{ background: 'var(--blue-light)' }}>
                        <span className="section-number">02</span>
                        <h3 className="section-title"><i className="ri-booklet-line"></i> Catálogo Simples</h3>
                        <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>Não precisa de site. Seu catálogo deve ter:</p>
                        <div className="grid-2">
                            <ul className="check-list" style={{ fontSize: '1rem' }}>
                                <li><i className="ri-image-line"></i> Foto bonita</li>
                                <li><i className="ri-ruler-line"></i> Tamanho (cm)</li>
                                <li><i className="ri-time-line"></i> Tempo preparação</li>
                            </ul>
                            <ul className="check-list" style={{ fontSize: '1rem' }}>
                                <li><i className="ri-price-tag-3-line"></i> Preço base</li>
                                <li><i className="ri-calendar-check-line"></i> Duração</li>
                                <li><i className="ri-text"></i> Nome claro</li>
                            </ul>
                        </div>
                        <div className="catalog-preview" style={{ marginTop: '20px', background: 'white', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <div className="catalog-img"><i className="ri-cake-3-line"></i></div>
                            <div className="catalog-info">
                                <h4>Topper Personalizado</h4>
                                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '10px' }}>Nome + 1 Personagem à escolha</p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '0.9rem', color: '#888' }}><i className="ri-time-line"></i> 3 dias</span>
                                    <span style={{ color: 'var(--green-money)', fontWeight: 'bold', fontSize: '1.2rem' }}>R$ XX,00</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Row 2: Pricing & Social */}
                <div className="grid-3" style={{ marginBottom: '40px' }}>
                    <section className="sales-card sec-yellow">
                        <span className="section-number">03</span>
                        <h3 className="section-title"><i className="ri-calculator-line"></i> Calcular Preço</h3>
                        <div style={{ background: '#FFF9C4', padding: '15px', borderRadius: '10px', textAlign: 'center', marginBottom: '20px' }}>
                            <strong style={{ color: '#FBC02D', fontSize: '1.2rem' }}>Fórmula Mágica</strong>
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', fontWeight: 'bold' }}>
                                <span>Materiais</span> <span>+</span> <span>Tempo</span> <span>+</span> <span>Lucro</span>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gap: '10px' }}>
                            <div style={{ background: '#f5f5f5', padding: '10px', borderRadius: '8px', borderLeft: '4px solid #ddd' }}>🍭 Mini Simples (Barato)</div>
                            <div style={{ background: '#f5f5f5', padding: '10px', borderRadius: '8px', borderLeft: '4px solid #bbb' }}>🎨 Detalhada (Médio)</div>
                            <div style={{ background: '#f5f5f5', padding: '10px', borderRadius: '8px', borderLeft: '4px solid #999' }}>🎂 Topper (Alto)</div>
                            <div style={{ background: '#f5f5f5', padding: '10px', borderRadius: '8px', borderLeft: '4px solid #FFD700' }}>🎁 Kit Festa (Premium)</div>
                        </div>
                    </section>

                    <section className="sales-card sec-pink" style={{ background: '#FFF0F5' }}>
                        <span className="section-number">04</span>
                        <h3 className="section-title"><i className="ri-instagram-line"></i> Instagram & TikTok</h3>
                        <p style={{ marginBottom: '15px' }}>O segredo é VÍDEO. Mostre o processo.</p>
                        <div className="social-grid">
                            <div className="social-item"><i className="ri-movie-line"></i><small>Do zero</small></div>
                            <div className="social-item"><i className="ri-mic-line"></i><small>ASMR</small></div>
                            <div className="social-item"><i className="ri-gift-line"></i><small>Embalando</small></div>
                            <div className="social-item"><i className="ri-layout-masonry-line"></i><small>Mesa Pronta</small></div>
                            <div className="social-item"><i className="ri-user-smile-line"></i><small>Pedido Cliente</small></div>
                            <div className="social-item"><i className="ri-calendar-event-line"></i><small>Tema Semanal</small></div>
                        </div>
                        <div style={{ marginTop: '20px', textAlign: 'center', background: 'white', padding: '10px', borderRadius: '30px', fontWeight: 'bold', color: '#E91E63' }}>
                            <i className="ri-refresh-line"></i> 3 Reels/semana + Stories Diárias
                        </div>
                    </section>

                    <section className="sales-card sec-lilac" style={{ background: '#F3E5F5' }}>
                        <span className="section-number">05</span>
                        <h3 className="section-title" style={{ color: '#9C27B0' }}><i className="ri-file-text-line"></i> Copy & Paste</h3>

                        <div className="copy-box" style={{ borderColor: '#AB47BC' }}>
                            <button className="copy-btn"><i className="ri-file-copy-line"></i> Copiar</button>
                            <strong>✨ Topper Personalizado</strong>
                            <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>Faça seu bolo brilhar! 💛<br />Tema + Nome a seu gosto.<br />📲 Pedidos por DM</p>
                        </div>
                        <div className="copy-box" style={{ borderColor: '#AB47BC' }}>
                            <button className="copy-btn"><i className="ri-file-copy-line"></i> Copiar</button>
                            <strong>⚠️ Urgência</strong>
                            <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>Agenda quase cheia! 😱<br />Garanta sua data hoje mesmo.</p>
                        </div>
                    </section>
                </div>

                {/* Row 3: Local Sales & Alliances */}
                <div className="grid-2" style={{ marginBottom: '40px' }}>
                    <section className="sales-card sec-green">
                        <span className="section-number">06</span>
                        <h3 className="section-title"><i className="ri-map-pin-user-line"></i> Clientes na sua Cidade</h3>
                        <div className="grid-4" style={{ textAlign: 'center' }}>
                            <div><i className="ri-store-2-fill" style={{ fontSize: '2rem', color: 'var(--green-money)' }}></i><br /><small>Confeitarias</small></div>
                            <div><i className="ri-cup-fill" style={{ fontSize: '2rem', color: 'var(--green-money)' }}></i><br /><small>Cafeterias</small></div>
                            <div><i className="ri-store-2-fill" style={{ fontSize: '2rem', color: 'var(--green-money)' }}></i><br /><small>Salões</small></div>
                            <div><i className="ri-parent-fill" style={{ fontSize: '2rem', color: 'var(--green-money)' }}></i><br /><small>Escolas</small></div>
                        </div>
                        <div className="copy-box" style={{ marginTop: '20px', borderColor: 'var(--green-money)', background: '#E8F5E9' }}>
                            <strong>🗣️ Script Presencial:</strong> "Olá, faço toppers personalizados. Posso deixar algumas amostras e meu catálogo para seus clientes? É um plus para seus bolos."
                        </div>
                    </section>

                    <section className="sales-card sec-blue">
                        <span className="section-number">07</span>
                        <h3 className="section-title"><i className="ri-shake-hands-line"></i> Alianças Estratégicas</h3>
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexDirection: 'row' }} className="flex-col md:flex-row">
                            <div style={{ flex: 1 }}>
                                <strong>Com quem?</strong>
                                <ul className="check-list" style={{ fontSize: '0.9rem', marginTop: '10px' }}>
                                    <li><i className="ri-user-heart-line"></i> Confeiteiras</li>
                                    <li><i className="ri-palette-line"></i> Decoradoras</li>
                                    <li><i className="ri-camera-lens-line"></i> Fotógrafos</li>
                                </ul>
                            </div>
                            <div style={{ flex: 1, borderLeft: '2px solid #eee', paddingLeft: '20px' }}>
                                <strong>O que oferece?</strong>
                                <div style={{ background: '#E3F2FD', padding: '10px', borderRadius: '8px', marginBottom: '5px', fontSize: '0.9rem' }}>💎 Desconto Sócios</div>
                                <div style={{ background: '#E3F2FD', padding: '10px', borderRadius: '8px', marginBottom: '5px', fontSize: '0.9rem' }}>💸 Comissão Venda</div>
                                <div style={{ background: '#E3F2FD', padding: '10px', borderRadius: '8px', fontSize: '0.9rem' }}>📦 Pacote Combo</div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Row 4: Promos, Trust & Delivery */}
                <div className="grid-3" style={{ marginBottom: '40px' }}>
                    <section className="sales-card sec-yellow">
                        <span className="section-number">08</span>
                        <h3 className="section-title"><i className="ri-price-tag-2-line"></i> Promoções</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div className="promo-card">
                                <h4>🎉 Combo Festa</h4>
                                <small>1 Topper + 10 Lembrancinhas = Preço Especial</small>
                            </div>
                            <div className="promo-card" style={{ borderColor: '#FFA000', background: '#FFF3E0' }}>
                                <h4>🎁 Presentinho Extra</h4>
                                <small>Compre 20 e ganhe 2 de brinde</small>
                            </div>
                            <div className="promo-card" style={{ borderColor: '#F44336', background: '#FFEBEE' }}>
                                <h4>⏳ Oferta Tempo</h4>
                                <small>"Só por hoje: Tema Coelhinho"</small>
                            </div>
                        </div>
                    </section>

                    <section className="sales-card sec-pink">
                        <span className="section-number">09</span>
                        <h3 className="section-title"><i className="ri-shield-check-line"></i> Gerar Confiança</h3>
                        <ul className="check-list" style={{ fontSize: '1rem' }}>
                            <li><i className="ri-star-fill" style={{ color: 'gold' }}></i> Opiniões Clientes</li>
                            <li><i className="ri-video-line"></i> Vídeos Embalando</li>
                            <li><i className="ri-camera-line"></i> Fotos Reais (Sem filtro)</li>
                            <li><i className="ri-contrast-drop-line"></i> Antes / Depois (Secagem)</li>
                        </ul>
                        <div style={{ marginTop: '15px', borderTop: '2px dashed #eee', paddingTop: '15px' }}>
                            <strong>Sempre mencione:</strong>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '5px' }}>
                                <span className="tag" style={{ background: '#eee' }}>Artesanal</span>
                                <span className="tag" style={{ background: '#eee' }}>Personalizado</span>
                                <span className="tag" style={{ background: '#eee' }}>Bem Embalado</span>
                            </div>
                        </div>
                    </section>

                    <section className="sales-card sec-green" style={{ background: '#E0F2F1' }}>
                        <span className="section-number">10</span>
                        <h3 className="section-title" style={{ color: '#009688' }}><i className="ri-truck-line"></i> Entrega</h3>
                        <div className="grid-2" style={{ marginTop: '20px' }}>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
                                <i className="ri-home-heart-line" style={{ fontSize: '2rem', color: '#009688' }}></i>
                                <div>Retirada</div>
                            </div>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
                                <i className="ri-motorbike-line" style={{ fontSize: '2rem', color: '#009688' }}></i>
                                <div>Envio (R$)</div>
                            </div>
                        </div>
                        <div className="tip-box" style={{ marginTop: '15px', borderColor: '#009688', color: '#004D40' }}>
                            <i className="ri-alarm-warning-line" style={{ color: '#009688' }}></i>
                            <small><strong>Antecipação:</strong> Mínimo 2-4 dias.</small>
                        </div>
                    </section>
                </div>

                {/* Row 5: Responses & Strategy */}
                <div className="grid-2" style={{ marginBottom: '40px' }}>
                    <section className="sales-card sec-lilac">
                        <span className="section-number">11</span>
                        <h3 className="section-title" style={{ color: '#9C27B0' }}><i className="ri-chat-smile-2-line"></i> Respostas Rápidas</h3>

                        <div className="copy-box" style={{ borderLeftColor: '#CE93D8', background: '#F3E5F5' }}>
                            <button className="copy-btn"><i className="ri-file-copy-line"></i></button>
                            <strong>💰 Preço?</strong>
                            <p style={{ fontSize: '0.9rem' }}>"Oi! Me diga tema, quantidade e data. Assim te dou opções exatas 😍"</p>
                        </div>
                        <div className="copy-box" style={{ borderLeftColor: '#CE93D8', background: '#F3E5F5' }}>
                            <button className="copy-btn"><i className="ri-file-copy-line"></i></button>
                            <strong>🎨 Personaliza?</strong>
                            <p style={{ fontSize: '0.9rem' }}>"Sim claro! Qualquer cor, tema e nome. 😊"</p>
                        </div>
                        <div className="copy-box" style={{ borderLeftColor: '#CE93D8', background: '#F3E5F5' }}>
                            <button className="copy-btn"><i className="ri-file-copy-line"></i></button>
                            <strong>🕒 Duração?</strong>
                            <p style={{ fontSize: '0.9rem' }}>"Dura muito em lugar fresco e seco. Não refrigerar. 😊"</p>
                        </div>
                    </section>

                    <section className="sales-card sec-blue" style={{ background: 'linear-gradient(to bottom, #fff, #F1F8E9)' }}>
                        <span className="section-number">12</span>
                        <h3 className="section-title"><i className="ri-rocket-line"></i> Estratégia 7 Dias</h3>
                        <div className="timeline-container">
                            {days.map((day, index) => (
                                <div
                                    key={index}
                                    className={`timeline-day ${checkedDays[index] ? 'active' : ''}`}
                                    onClick={() => toggleDay(index)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <h4>{day.label}</h4>
                                    <div style={{ fontSize: '0.8rem' }}>{day.task}</div>
                                    <div className="checkbox-round">
                                        {checkedDays[index] && <i className="ri-check-line"></i>}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '30px', fontWeight: 'bold', color: 'var(--green-money)' }}>
                            Siga o plano e verá resultados! 🚀
                        </div>
                    </section>
                </div>

                {/* Summary Footer */}
                <div className="summary-section">
                    <h2 style={{ fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>🔥 O mais importante</h2>
                    <div className="summary-list">
                        <div className="summary-item">
                            <i className="ri-gift-line"></i>
                            <span>Produto<br />Bonito</span>
                        </div>
                        <div className="summary-item">
                            <i className="ri-camera-lens-line"></i>
                            <span>Fotos &<br />Vídeos</span>
                        </div>
                        <div className="summary-item">
                            <i className="ri-book-open-line"></i>
                            <span>Catálogo<br />Simples</span>
                        </div>
                        <div className="summary-item">
                            <i className="ri-group-line"></i>
                            <span>Alianças<br />Locais</span>
                        </div>
                        <div className="summary-item">
                            <i className="ri-magic-line"></i>
                            <span>Personalização<br />(Mais R$)</span>
                        </div>
                    </div>
                    <div style={{ marginTop: '40px', fontSize: '1.5rem', fontFamily: 'MiSans-Medium' }}>
                        Agora é vender e crescer seu negócio! 💰✨
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesGuide;
