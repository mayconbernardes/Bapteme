import { useLang } from '@/contexts/LanguageContext';
import { MapPin, Clock, Navigation } from 'lucide-react';
import anaisMariusPhoto from '@/assets/AnaisMarius.png';

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
                "Version complète du déroulé de la célébration du baptême d'Alba, avec les textes, réponses de l'assemblée et chants.",
                'Versão completa da celebração do batizado da Alba, com textos, respostas da assembleia e cânticos.'
              )}
            </p>
            <div className="space-y-4">
              <section className="bg-background/60 rounded-lg p-4 border border-border">
                <p className="font-display text-xl text-center leading-relaxed">Baptême d&apos;Alba</p>
                <p className="font-body text-sm text-center text-muted-foreground mt-2">
                  Samedi 9 Mai 2026
                </p>
                <p className="font-body text-sm text-center text-muted-foreground">
                  Église de Notre-Dame de Quezac
                </p>
                <p className="font-body text-sm text-center text-muted-foreground">
                  Cantal (15)
                </p>
              </section>

              <section className="bg-background/60 rounded-lg p-4 border border-border">
                <h4 className="font-display text-lg font-semibold mb-4">1. Rites d&apos;accueil</h4>
                <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>Peuple de lumi&egrave;re baptis&eacute; pour t&eacute;moigner.<br />Peuple d&apos;&Eacute;vangile appel&eacute; pour annoncer<br />Les merveilles de Dieu pour tous les vivants.</p>
                  <p>Vous &ecirc;tes l&apos;&Eacute;vangile pour vos fr&egrave;res<br />Si vous gardez ma parole<br />Pour avancer dans la v&eacute;rit&eacute;<br />Bonne nouvelle pour la terre</p>
                  <p>Peuple de lumi&egrave;re baptis&eacute; pour t&eacute;moigner.<br />Peuple d&apos;&eacute;vangile appel&eacute; pour annoncer<br />Les merveilles de Dieu pour tous les vivants.</p>
                  <p className="text-foreground font-medium">Dialogue avec les parents, puis avec les parrains et marraines</p>
                  <p><strong className="text-foreground">Quel pr&eacute;nom avez-vous choisi pour votre enfant ?</strong><br />Les parents : Alba.</p>
                  <p><strong className="text-foreground">Que demandez-vous pour Alba &agrave; l&apos;&Eacute;glise de Dieu ?</strong><br />Les parents : Le Bapt&ecirc;me.</p>
                  <p><strong className="text-foreground">Vous demandez le bapt&ecirc;me pour votre enfant. Vous aurez &agrave; l&apos;&eacute;duquer dans la foi, de sorte qu&apos;en gardant les commandements, elle aime Dieu et le prochain comme le Christ nous l&apos;a montr&eacute;. En &ecirc;tes-vous bien conscients ?</strong><br />Les parents : Oui, nous le sommes.</p>
                  <p><strong className="text-foreground">Et vous, parrains et marraines, vous devrez aider ces parents &agrave; exercer leur responsabilit&eacute;. &Ecirc;tes-vous dispos&eacute;s &agrave; le faire ?</strong><br />Les parrains et marraines : Oui, nous le sommes.</p>
                  <p className="text-foreground font-medium">Signation des enfants</p>
                  <p>Alba, l&apos;&Eacute;glise de Dieu t&apos;accueille avec une grande joie. En son nom, je te marque de la croix qui est le signe du Christ, notre Sauveur. Et vous, ses parents, parrains et marraines, vous la marquerez apr&egrave;s moi de ce m&ecirc;me signe.</p>
                </div>
              </section>

              <section className="bg-background/60 rounded-lg p-4 border border-border">
                <h4 className="font-display text-lg font-semibold mb-4">2. C&eacute;l&eacute;bration de la Parole de Dieu</h4>
                <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>Le bapt&ecirc;me, c&apos;est l&apos;entr&eacute;e dans une grande famille : l&apos;&Eacute;glise. L&apos;esprit de famille, c&apos;est le Christ qui nous le donne. Sa Parole, Parole de Dieu, est conserv&eacute;e dans l&apos;&Eacute;vangile, qui veut dire : Bonne Nouvelle. Cette Bonne Nouvelle, l&apos;&Eacute;glise nous la transmet, l&apos;&Eacute;glise nous l&apos;explique.</p>
                  <p className="text-foreground font-medium">All&eacute;luia</p>
                  <p>Refrain : All&eacute;luia, all&eacute;luia, all&eacute;luia.</p>
                  <p>1. Proclamez que le Seigneur est bon,<br />&Eacute;ternel est son amour !<br />Que le dise la maison d&apos;Isra&euml;l,<br />&Eacute;ternel est son amour !</p>
                  <p className="text-foreground font-medium">Lettre de saint Paul Ap&ocirc;tre aux &Eacute;ph&eacute;siens (4, 1-6)</p>
                  <p>Fr&egrave;res, moi qui suis en prison &agrave; cause du Seigneur, je vous exhorte donc &agrave; vous conduire d&apos;une mani&egrave;re digne de votre vocation : ayez beaucoup d&apos;humilit&eacute;, de douceur et de patience, supportez-vous les uns les autres avec amour ; ayez &agrave; c&oelig;ur de garder l&apos;unit&eacute; dans l&apos;Esprit par le lien de la paix. Comme votre vocation vous a tous appel&eacute;s &agrave; une seule esp&eacute;rance, de m&ecirc;me, il y a un seul Corps et un seul Esprit. Il y a un seul Seigneur, une seule foi, un seul bapt&ecirc;me, un seul Dieu et P&egrave;re de tous, au-dessus de tous, par tous, et en tous.</p>
                  <p className="text-foreground font-medium">Pri&egrave;re commune de l&apos;assembl&eacute;e</p>
                  <p>Cette Bonne Nouvelle venue de Dieu, entendue et accueillie, fait jaillir de nos c&oelig;urs une pri&egrave;re.</p>
                  <p>Fr&egrave;res, prions pour cet enfant qui va recevoir le bapt&ecirc;me. Prions pour ses parents, son parrain, sa marraine et pour tous les baptis&eacute;s. Confions-nous &agrave; la bont&eacute; de J&eacute;sus-Christ Notre Seigneur.</p>
                  <p>Refrain : Accueille au creux de tes mains, la pri&egrave;re de tes enfants.</p>
                  <p>1. Seigneur J&eacute;sus, que le myst&egrave;re de ta mort et de ta r&eacute;surrection donne &agrave; cet enfant de rena&icirc;tre par le bapt&ecirc;me et de faire partie de ton &Eacute;glise.</p>
                  <p>2. Par le bapt&ecirc;me et la confirmation, fais que cet enfant devienne un disciple fid&egrave;le et un t&eacute;moin de ton &Eacute;vangile.</p>
                  <p>3. Viens en aide &agrave; ses parents, &agrave; son parrain et sa marraine : qu&apos;ils soient pour Alba de vrais t&eacute;moins de la foi.</p>
                  <p>4. Maintiens dans ton amour tous les membres de sa famille et renouvelle en chacun de nous la gr&acirc;ce du bapt&ecirc;me.</p>
                  <p>5. Autres intentions.</p>
                </div>
              </section>

              <section className="bg-background/60 rounded-lg p-4 border border-border">
                <h4 className="font-display text-lg font-semibold mb-4">3. Nous sommes choisis</h4>
                <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>La vie chr&eacute;tienne est un choix. Des hommes, des femmes, des jeunes, des enfants choisissent de vivre avec le Christ. Depuis que le christianisme existe, une multitude de gens ont v&eacute;cu dans une relation profonde &agrave; J&eacute;sus-Christ. On les appelle les saints.</p>
                  <p>Nous prions tous ceux qui ont r&eacute;ussi leur vie selon J&eacute;sus-Christ et nous leur demandons d&apos;&ecirc;tre les compagnons de ces enfants sur la route de la foi.</p>
                  <p className="text-foreground font-medium">Saints et Saintes de Dieu, priez pour nous</p>
                  <ul className="space-y-2">
                    {[
                      'Sainte Marie, M&egrave;re de Dieu',
                      'Saint Joseph',
                      'Saint Jean Baptiste',
                      'Saint Pierre et Saint Paul',
                      'Saint Bruno',
                      'Sainte Am&eacute;lie',
                      'Sainte Alba',
                      'Sainte Antonella',
                      'Saint Michel',
                      'Sainte Ana&iuml;s',
                      'Saint Marius',
                    ].map((saint) => (
                      <li key={saint} className="flex items-start gap-2">
                        <span className="text-gold mt-1 shrink-0">✿</span>
                        <span>{saint} : <strong className="text-foreground">PRIEZ POUR NOUS !</strong></span>
                      </li>
                    ))}
                  </ul>
                  <p>Saints et Saintes de Dieu qui ont cri&eacute; J&eacute;sus-Christ sur les routes du monde : <strong className="text-foreground">SAINTS ET SAINTES DE DIEU, PRIEZ POUR NOUS !</strong></p>
                  <p className="text-foreground font-medium">Prions !</p>
                  <p>Dieu fort et qui nous aime, tu as envoy&eacute; dans le monde ton Fils J&eacute;sus pour arracher l&apos;homme au mal, pour que l&apos;homme soit l&apos;ami de Dieu. Cet enfant veut vivre et &ecirc;tre heureux ; pour cela, il devra lutter, il devra entendre l&apos;appel de J&eacute;sus-Christ &agrave; le suivre. Ses parents, son parrain, et sa marraine l&apos;aiment beaucoup ; fais qu&apos;ils l&apos;aident de tout leur c&oelig;ur. Avec eux, qu&apos;elle rencontre J&eacute;sus-Christ ; avec eux, qu&apos;elle apprenne &agrave; partager, &agrave; pardonner ; avec eux, qu&apos;elle travaille &agrave; changer ce monde en un monde de fr&egrave;res. Nous te le demandons par J&eacute;sus ton Fils. Amen.</p>
                  <p className="text-foreground font-medium">Imposition de la main</p>
                  <p>En imposant maintenant la main sur la t&ecirc;te de l&apos;enfant, le pr&ecirc;tre veut signifier la tendresse du Christ qui choisit cet enfant pour &ecirc;tre son ami.</p>
                  <p><strong className="text-foreground">Que la puissance du Christ Sauveur te donne la force de Dieu qui r&egrave;gne pour les si&egrave;cles des si&egrave;cles !</strong></p>
                </div>
              </section>

              <section className="bg-background/60 rounded-lg p-4 border border-border">
                <h4 className="font-display text-lg font-semibold mb-4">4. Un engagement</h4>
                <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>Chers parents, chers parrains et marraines, l&apos;enfant que vous pr&eacute;sentez va recevoir le sacrement du bapt&ecirc;me : dans son amour infini, Dieu va lui donner sa propre vie ; il va lui communiquer l&apos;Esprit Saint pour qu&apos;elle puisse toute sa vie proclamer les merveilles de Dieu.</p>
                  <p>Ayez le souci de la faire grandir dans la foi, pour que cette vie divine ne soit jamais d&eacute;truite ni affaiblie par l&apos;indiff&eacute;rence et le p&eacute;ch&eacute;, mais qu&apos;elle se d&eacute;veloppe en eux de jour en jour. Vous &ecirc;tes donc amen&eacute;s &agrave; prendre une lourde responsabilit&eacute; : faire d&eacute;couvrir l&apos;amour du Christ &agrave; votre enfant ; aussi, puisqu&apos;il n&apos;y a pas de bapt&ecirc;me sans foi en J&eacute;sus-Christ, il convient que vous proclamiez votre foi chr&eacute;tienne dans laquelle tout enfant est baptis&eacute;.</p>
                  <p>Mais auparavant, prenons l&apos;engagement, dans la perspective d&apos;une longue &eacute;ducation chr&eacute;tienne, de lutter contre le mal, de travailler &agrave; mettre dans notre vie l&apos;amour apport&eacute; par J&eacute;sus-Christ.</p>
                  <p className="text-foreground font-medium">Renonciation &agrave; Satan et profession de foi</p>
                  <p><strong className="text-foreground">Pour vivre en disciples de J&eacute;sus-Christ, rejetez-vous le p&eacute;ch&eacute; : c&apos;est-&agrave;-dire tout le mal qui est en nous et autour de nous, tous les refus d&apos;aimer, les &eacute;go&iuml;smes, les violences, tout ce qui est source de division entre les hommes ?</strong><br />Tous : NOUS LE REJETONS.</p>
                  <p><strong className="text-foreground">Pour &eacute;chapper au pouvoir du p&eacute;ch&eacute;, rejetez-vous tout ce qui pousse au mal : les tentations et les sollicitations de toute sorte ?</strong><br />Tous : NOUS LE REJETONS.</p>
                  <p><strong className="text-foreground">Pour suivre le Christ dans notre vie de tous les jours, rejetez-vous Satan qui est, comme le dit le Christ dans l&apos;&Eacute;vangile, l&apos;auteur du p&eacute;ch&eacute; d&egrave;s l&apos;origine ?</strong><br />Tous : NOUS LE REJETONS.</p>
                  <p><strong className="text-foreground">Croyez-vous en Dieu, P&egrave;re plein de tendresse qui, par amour pour nous, apr&egrave;s nous avoir cr&eacute;&eacute;s, nous a donn&eacute; son propre Fils J&eacute;sus-Christ ?</strong><br />Tous : NOUS CROYONS.</p>
                  <p><strong className="text-foreground">Croyez-vous en J&eacute;sus-Christ, le Fils du P&egrave;re, n&eacute; de la Vierge Marie, mort pour que tous les hommes puissent acc&eacute;der &agrave; la vie de Dieu, vivant maintenant pour nous entra&icirc;ner avec lui dans une vie nouvelle, celle de la r&eacute;surrection ?</strong><br />Tous : NOUS CROYONS.</p>
                  <p><strong className="text-foreground">Croyez-vous en l&apos;Esprit Saint donn&eacute; par le Christ ressuscit&eacute;, source en nous de pardon, d&apos;amour et de vie sans fin ?</strong><br />Tous : NOUS CROYONS.</p>
                  <p><strong className="text-foreground">Croyez-vous qu&apos;avec tous les chr&eacute;tiens du monde entier, nous formons une seule communaut&eacute;, l&apos;&Eacute;glise du Christ ; que nous sommes unis par l&apos;amour m&ecirc;me du Christ, appel&eacute;s &agrave; t&eacute;moigner de lui au milieu des hommes, avec qui un jour nous ressusciterons et conna&icirc;trons la vie qui ne finit pas ?</strong><br />Tous : NOUS CROYONS.</p>
                </div>
              </section>

              <section className="bg-background/60 rounded-lg p-4 border border-border">
                <h4 className="font-display text-lg font-semibold mb-4">5. Le Sacrement</h4>
                <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
                  <p><strong className="text-foreground">Voulez-vous que Alba soit baptis&eacute;e dans cette foi de l&apos;&Eacute;glise que tous ensemble nous venons d&apos;exprimer ?</strong><br />(Parents, parrains et marraines) : OUI, NOUS LE VOULONS.</p>
                  <p className="text-foreground font-medium">Alba, je te baptise</p>
                  <p>Au nom du P&egrave;re et du Fils et du Saint-Esprit.</p>
                  <p>Tu es devenu enfant de Dieu et fr&egrave;re de J&eacute;sus, All&eacute;luia !<br />Aujourd&apos;hui l&apos;Esprit repose en toi et chante : All&eacute;luia.</p>
                  <p>Tu rentres dans la ronde, la ronde de son amour,<br />Tu danses avec tes fr&egrave;res la danse de sa joie.</p>
                </div>
              </section>

              <section className="bg-background/60 rounded-lg p-4 border border-border">
                <h4 className="font-display text-lg font-semibold mb-4">6. Signes de fid&eacute;lit&eacute;</h4>
                <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>Apr&egrave;s l&apos;eau : voici l&apos;huile, le v&ecirc;tement blanc et la lumi&egrave;re. Autant de signes qui nous parlent de J&eacute;sus-Christ pr&eacute;sent &agrave; notre vie.</p>
                  <p className="text-foreground font-medium">Onction avec le Saint Chr&ecirc;me</p>
                  <p>L&apos;Esprit Saint est toujours donn&eacute; &agrave; quelqu&apos;un en vue d&apos;une mission. Comme l&apos;huile p&eacute;n&egrave;tre tout ce qu&apos;elle touche, que l&apos;Esprit Saint impr&egrave;gne ces enfants de sa lumi&egrave;re et de sa force pour qu&apos;ils puissent, par toute leur vie, annoncer la Bonne Nouvelle de J&eacute;sus-Christ.</p>
                  <p>Tu es devenu enfant de Dieu et fr&egrave;re de J&eacute;sus, All&eacute;luia !<br />Aujourd&apos;hui l&apos;Esprit repose en toi et chante All&eacute;luia.</p>
                  <p className="text-foreground font-medium">Le v&ecirc;tement blanc</p>
                  <p>Alba, vous avez re&ccedil;u une vie nouvelle, celle du Christ ressuscit&eacute; ; c&apos;est pourquoi vous portez ce v&ecirc;tement blanc. Que vos parents et vos amis vous aident, par le t&eacute;moignage de leur vie, &agrave; garder intacte cette dignit&eacute; de Fils de Dieu.</p>
                  <p>Tu es devenu enfant de Dieu et fr&egrave;re de J&eacute;sus, All&eacute;luia !<br />Aujourd&apos;hui l&apos;Esprit repose en toi et chante All&eacute;luia.</p>
                  <p className="text-foreground font-medium">Le cierge allum&eacute;</p>
                  <p>Recevez la Lumi&egrave;re du Christ ! C&apos;est &agrave; vous, ses parents, ses parrains et marraines, que cette lumi&egrave;re est confi&eacute;e. Veillez &agrave; l&apos;entretenir pour que votre enfant, illumin&eacute;e par le Christ, avance dans la vie en enfant de lumi&egrave;re et pers&eacute;v&egrave;re dans la foi. Ainsi, quand viendra le Seigneur, elle pourra aller &agrave; sa rencontre dans le Royaume, avec tous les saints du ciel.</p>
                  <p>Tu es devenu enfant de Dieu et fr&egrave;re de J&eacute;sus, All&eacute;luia !<br />Aujourd&apos;hui l&apos;Esprit repose en toi et chante All&eacute;luia.</p>
                  <p>Tu portes sa lumi&egrave;re, lumi&egrave;re de sa beaut&eacute;.<br />Tu chantes ses merveilles, merveilles de son c&oelig;ur.</p>
                </div>
              </section>

              <section className="bg-background/60 rounded-lg p-4 border border-border">
                <h4 className="font-display text-lg font-semibold mb-4">7. Une communaut&eacute;</h4>
                <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>Fr&egrave;res, par le bapt&ecirc;me, Alba est n&eacute;e &agrave; une vie nouvelle. Elle est appel&eacute;e fille de Dieu et elle l&apos;est vraiment.</p>
                  <p>Un jour, par la confirmation, elle recevra pleinement le Saint-Esprit qui l&apos;aidera &agrave; vivre en chr&eacute;tienne.</p>
                  <p>Elle prendra part avec d&apos;autres chr&eacute;tiens au repas du Seigneur dans le sacrement de l&apos;Eucharistie.</p>
                  <p>Avec sa famille, avec la communaut&eacute; chr&eacute;tienne, elle donnera &agrave; Dieu le nom de P&egrave;re au milieu de son peuple.</p>
                  <p className="text-foreground font-medium">Aujourd&apos;hui, nous prions en son nom :</p>
                  <p>Notre P&egrave;re, qui es aux cieux,<br />Que ton nom soit sanctifi&eacute;,<br />Que ton r&egrave;gne vienne,<br />Que ta volont&eacute; soit faite sur la terre comme au ciel.</p>
                  <p>Donne-nous aujourd&apos;hui notre pain de ce jour.<br />Pardonne-nous nos offenses, comme nous pardonnons aussi &agrave; ceux qui nous ont offens&eacute;s.<br />Et ne nous laisse pas entrer en tentation,<br />Mais d&eacute;livre-nous du Mal.</p>
                </div>
              </section>

              <section className="bg-background/60 rounded-lg p-4 border border-border">
                <h4 className="font-display text-lg font-semibold mb-4">Rites de conclusion</h4>
                <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>Par la naissance de son Fils au milieu des hommes, Dieu a rempli le monde d&apos;une grande joie. Qu&apos;il b&eacute;nisse cet enfant nouvellement baptis&eacute; afin qu&apos;il parvienne &agrave; la ressemblance parfaite avec le Christ.<br />Tous : AMEN !</p>
                  <p>Que le Seigneur tout puissant, Dieu qui donne la vie terrestre et la vie du ciel, b&eacute;nisse le p&egrave;re et la m&egrave;re de Alba. Ils sont heureux de sa naissance ; avec lui, qu&apos;ils demeurent toujours dans l&apos;action de gr&acirc;ce.<br />Tous : AMEN !</p>
                  <p>Que le Seigneur tout-puissant, Dieu qui nous a fait rena&icirc;tre de l&apos;eau et de l&apos;Esprit, comble de b&eacute;n&eacute;dictions les fid&egrave;les ici r&eacute;unis : qu&apos;ils soient toujours les membres vivants de son peuple.<br />Tous : AMEN !</p>
                  <p>C&apos;est Dieu qui donne la vie et qui inspire l&apos;amour. C&apos;est lui qui met au c&oelig;ur des mamans une tendresse particuli&egrave;re pour ceux &agrave; qui elles donnent le jour. Qu&apos;il b&eacute;nisse la maman de Alba qui vient d&apos;&ecirc;tre baptis&eacute;e. Qu&apos;elle ait la joie de la voir r&eacute;pondre &agrave; son amour et progresser dans le bien.<br />Tous : AMEN !</p>
                  <p>C&apos;est Dieu qui est la source et le mod&egrave;le de toute paternit&eacute;. Qu&apos;il prot&egrave;ge le p&egrave;re de Alba, afin qu&apos;il sache, en lui donnant l&apos;exemple, l&apos;aider &agrave; devenir vraiment adulte dans sa vie humaine et dans sa foi.<br />Tous : AMEN !</p>
                  <p>Dieu aime tous les hommes. Qu&apos;il n&apos;oublie aucun de ceux qui sont ici, amis et proches. Qu&apos;il les pr&eacute;serve du mal et qu&apos;il donne &agrave; chacun la joie et la paix.</p>
                  <p className="text-foreground font-medium">Chant final</p>
                  <p>1. Parmi la bruy&egrave;re des vastes plateaux, r&eacute;sonne, &ocirc; ma M&egrave;re un chant tout nouveau.<br />Ave, Ave, Ave Maria !</p>
                  <p>2. &Agrave; Qu&eacute;zac, sans crainte venez p&egrave;lerins, redire la plainte des pauvres humains.</p>
                  <p>3. Priez la madone qui vous tend les bras si douce et si bonne pour tous ici-bas.</p>
                  <p>4. En ce sanctuaire qu&apos;aimaient nos a&iuml;eux, r&eacute;pands bonne M&egrave;re les faveurs des cieux.</p>
                  <p><strong className="text-foreground">Allez dans la paix du Christ !</strong><br />Tous : Nous rendons gr&acirc;ce &agrave; Dieu !</p>
                </div>
              </section>

              <section className="bg-background/60 rounded-lg p-4 border border-border">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img
                    src={anaisMariusPhoto}
                    alt="Anaïs et Marius, le parrain et la marraine d'Alba"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-display text-lg text-center">Ana&iuml;s et Marius</p>
                <p className="font-body text-sm text-center text-muted-foreground">
                  Parrain et marraine d&apos;Alba
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeremonySection;
