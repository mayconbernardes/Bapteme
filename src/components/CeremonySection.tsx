import { useLang } from '@/contexts/LanguageContext';
import { MapPin, Clock, Navigation } from 'lucide-react';

const CeremonySection = () => {
  const { t } = useLang();

  return (
    <section id="ceremonie">
      <div className="section-container">
        <h2 className="section-title">
          {t('Cérémonie & Réception – 9 mai 2026', 'Cerimônia & Recepção – 9 de maio de 2026')}
        </h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Church */}
          <div className="card-cantal p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <Clock size={20} className="text-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              {t('Cérémonie – 11h00', 'Cerimônia – 11h00')}
            </h3>
            <p className="font-body text-muted-foreground mb-1 flex items-center justify-center gap-1.5">
              <MapPin size={14} />
              {t("Église de Quézac", "Igreja de Quézac")}
            </p>
            <p className="font-body text-sm text-muted-foreground mb-4">
              {t("Sanctuaire Notre-Dame de Quézac", "Santuário Notre-Dame de Quézac")}
            </p>
            <div className="rounded-lg overflow-hidden mb-4 aspect-video">
              <iframe
                title={t("Carte Église de Quézac", "Mapa Igreja de Quézac")}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.5!2d2.2284!3d44.8674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ad4a3079dde70b%3A0x890ab91c7a82a72e!2s%C3%89glise%20de%20Qu%C3%A9zac!5e0!3m2!1sfr!2sfr!4v1709400000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/HNFFENNEYDirdUtt6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm inline-flex items-center gap-2"
            >
              <Navigation size={14} />
              {t("Comment y aller", "Como chegar")}
            </a>
          </div>

          {/* Reception */}
          <div className="card-cantal p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <MapPin size={20} className="text-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              {t('Réception', 'Recepção')}
            </h3>
            <p className="font-body text-muted-foreground mb-1">
              {t("Suivi d'un repas festif", "Seguido de um almoço festivo")}
            </p>
            <p className="font-body text-sm font-medium text-foreground mb-1">Maison Béthanie</p>
            <p className="font-body text-sm text-muted-foreground mb-4">
              1 Rue des Cèdres, 15600 Quézac
            </p>
            <div className="rounded-lg overflow-hidden mb-4 aspect-video">
              <iframe
                title={t("Carte Maison Béthanie", "Mapa Maison Béthanie")}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.5!2d2.228!3d44.867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ad4a0e6b8f9c0d%3A0x4b2c1d3e5f6a7b8c!2sMaison%20B%C3%A9thanie!5e0!3m2!1sfr!2sfr!4v1709400000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/dvydCp3W3avY1h1P9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm inline-flex items-center gap-2"
            >
              <Navigation size={14} />
              {t("Comment y aller", "Como chegar")}
            </a>
          </div>
        </div>

        <div id="liturgie" className="max-w-4xl mx-auto mt-10">
          <div className="card-cantal p-6">
            <h3 className="font-display text-xl font-semibold mb-2">
              {t('Livret liturgique', 'Guia litúrgico')}
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              {t(
                "Pour le baptême d'Alba (2 ans), voici la litanie et les lectures en format de suivi rapide pendant la célébration.",
                'Para o batizado da Alba (2 anos), segue a ladainha e as leituras em formato rápido para acompanhar durante a celebração.'
              )}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <a href="#litanie" className="btn-gold text-xs sm:text-sm">
                {t('Litanie', 'Ladainha')}
              </a>
              <a href="#lecture1" className="btn-gold text-xs sm:text-sm">
                {t('1ère lecture', '1ª leitura')}
              </a>
              <a href="#psaume" className="btn-gold text-xs sm:text-sm">
                {t('Psaume', 'Salmo')}
              </a>
              <a href="#evangile" className="btn-gold text-xs sm:text-sm">
                {t('Évangile', 'Evangelho')}
              </a>
            </div>

            <div className="space-y-4">
              <section id="litanie" className="bg-background/60 rounded-lg p-4 border border-border scroll-mt-24">
                <h4 className="font-display text-base font-semibold mb-1">
                  {t('Litanie des saints (réponse: Priez pour nous)', 'Ladainha dos Santos (resposta: Rogai por nós)')}
                </h4>
                <p className="font-body text-xs text-muted-foreground mb-3">
                  {t(
                    "Formule de suivi pour l'assemblée: après chaque invocation, répondre « Priez pour nous ».",
                    'Forma de acompanhamento para a assembleia: após cada invocação, responder « Rogai por nós ».'
                  )}
                </p>
                <ul className="space-y-2">
                  {(t(
                    'Sainte Marie, Mère de Dieu||Notre-Dame d\'Aparecida||Saint André||Saint Pierre||Saint Antoine||Sainte Bénédicte||Sainte Brune||Saint Joseph||Saint Jean-Baptiste||Saint Alban||Sainte Anne||Saint Joachim||Sainte Thérèse de Lisieux||Saint François d’Assise||Tous les saints et saintes de Dieu',
                    'Santa Maria, Mãe de Deus||Nossa Senhora Aparecida||São André||São Pedro||Santo Antônio||Santa Benedita||Santa Bruna||São José||São João Batista||São Albano||Santa Ana||São Joaquim||Santa Teresinha de Lisieux||São Francisco de Assis||Todos os santos e santas de Deus'
                  ))
                    .split('||')
                    .map((item, i) => (
                      <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-gold mt-1 shrink-0">✿</span>
                        <span>
                          {item} <strong className="text-foreground">{t('— Priez pour nous', '— Rogai por nós')}</strong>
                        </span>
                      </li>
                    ))}
                </ul>
              </section>

              <section id="lecture1" className="bg-background/60 rounded-lg p-4 border border-border scroll-mt-24">
                <h4 className="font-display text-base font-semibold mb-2">
                  {t('1ère lecture: 1 Jean 3, 1-2', '1ª leitura: 1 João 3, 1-2')}
                </h4>
                <div className="space-y-2 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">1.</strong>{' '}
                    {t(
                      "Voyez quel grand amour nous a donné le Père pour que nous soyons appelés enfants de Dieu, et nous le sommes.",
                      'Vede que grande amor o Pai nos deu: sermos chamados filhos de Deus, e nós o somos.'
                    )}
                  </p>
                  <p>
                    {t(
                      "Si le monde ne nous connaît pas, c'est qu'il ne l'a pas connu.",
                      'Se o mundo não nos conhece, é porque não conheceu a Deus.'
                    )}
                  </p>
                  <p>
                    <strong className="text-foreground">2.</strong>{' '}
                    {t(
                      "Bien-aimés, dès maintenant nous sommes enfants de Dieu; mais ce que nous serons n'a pas encore été manifesté.",
                      'Caríssimos, desde agora somos filhos de Deus, mas o que havemos de ser ainda não se manifestou.'
                    )}
                  </p>
                  <p>
                    {t(
                      "Nous savons que, lorsqu'il se manifestera, nous lui serons semblables, parce que nous le verrons tel qu'il est.",
                      'Sabemos que, quando Ele se manifestar, seremos semelhantes a Ele, porque O veremos como Ele é.'
                    )}
                  </p>
                </div>
              </section>

              <section id="psaume" className="bg-background/60 rounded-lg p-4 border border-border scroll-mt-24">
                <h4 className="font-display text-base font-semibold mb-2">
                  {t('Psaume 22 (23)', 'Salmo 22 (23)')}
                </h4>
                <p className="font-body text-sm text-foreground font-medium mb-2">
                  {t('Refrain: Le Seigneur est mon berger, je ne manque de rien.', 'Refrão: O Senhor é o meu pastor, nada me faltará.')}
                </p>
                <div className="space-y-2 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>{t("Le Seigneur est mon berger: je ne manque de rien.", 'O Senhor é o meu pastor: nada me faltará.')}</p>
                  <p>{t("Sur des prés d'herbe fraîche, il me fait reposer.", 'Em verdes prados, Ele me faz repousar.')}</p>
                  <p>{t("Il me mène vers les eaux tranquilles et me fait revivre.", 'Conduz-me para águas tranquilas e restaura minhas forças.')}</p>
                  <p>{t("Il me conduit par le juste chemin pour l'honneur de son nom.", 'Guia-me por caminhos retos, por amor do seu nome.')}</p>
                  <p>{t("Si je traverse les ravins de la mort, je ne crains aucun mal, car tu es avec moi.", 'Ainda que eu atravesse o vale escuro, não temerei mal algum, porque estás comigo.')}</p>
                  <p>{t("Ta houlette et ton bâton me rassurent.", 'Teu cajado e teu bastão me dão segurança.')}</p>
                  <p>{t("Tu prépares la table pour moi devant mes ennemis.", 'Preparas para mim a mesa, à vista dos meus adversários.')}</p>
                  <p>{t("Tu répands le parfum sur ma tête, ma coupe est débordante.", 'Unges minha cabeça com óleo e meu cálice transborda.')}</p>
                  <p>{t("Grâce et bonheur m'accompagnent tous les jours de ma vie.", 'Felicidade e graça vão me acompanhar todos os dias da minha vida.')}</p>
                  <p>{t("J'habiterai la maison du Seigneur pour la durée de mes jours.", 'E habitarei na casa do Senhor por longos dias.')}</p>
                </div>
              </section>

              <section id="evangile" className="bg-background/60 rounded-lg p-4 border border-border scroll-mt-24">
                <h4 className="font-display text-base font-semibold mb-2">
                  {t('Évangile: Marc 10, 13-16', 'Evangelho: Marcos 10, 13-16')}
                </h4>
                <div className="space-y-2 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">13.</strong>{' '}
                    {t(
                      "Des gens présentaient à Jésus des petits enfants pour qu'il pose la main sur eux; mais les disciples les écartaient vivement.",
                      'Alguns traziam crianças a Jesus para que as tocasse, mas os discípulos os repreendiam.'
                    )}
                  </p>
                  <p>
                    <strong className="text-foreground">14.</strong>{' '}
                    {t(
                      "Voyant cela, Jésus se fâcha et leur dit: « Laissez les enfants venir à moi, ne les empêchez pas, car le royaume de Dieu est à ceux qui leur ressemblent. »",
                      'Ao ver isso, Jesus indignou-se e disse: « Deixai vir a mim as crianças, não as impeçais, pois o Reino de Deus é dos que são como elas. »'
                    )}
                  </p>
                  <p>
                    <strong className="text-foreground">15.</strong>{' '}
                    {t(
                      "Amen, je vous le dis: celui qui n'accueille pas le royaume de Dieu à la manière d'un enfant n'y entrera pas.",
                      'Em verdade vos digo: quem não acolher o Reino de Deus como uma criança, não entrará nele.'
                    )}
                  </p>
                  <p>
                    <strong className="text-foreground">16.</strong>{' '}
                    {t(
                      "Puis il les embrassait et les bénissait en leur imposant les mains.",
                      'E, abraçando-as, abençoava-as, impondo-lhes as mãos.'
                    )}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeremonySection;
