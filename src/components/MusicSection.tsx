import { useLang } from '@/contexts/LanguageContext';
import { Music } from 'lucide-react';

const songs = [
  {
    fr: 'Le Seigneur est mon berger',
    pt: 'O Senhor é o meu pastor',
    url: 'https://www.youtube.com/embed/h9rSfP3cU84',
  },
  {
    fr: 'Tu es devenue enfant de Dieu',
    pt: 'Tu te tornaste filha de Deus',
    url: 'https://www.youtube.com/embed/S6wnj5rfyk8',
  },
];

const MusicSection = () => {
  const { t } = useLang();

  return (
    <section id="musiques" className="bg-primary/30">
      <div className="section-container">
        <h2 className="section-title">
          <Music className="inline-block mr-2 mb-1" size={28} />
          {t('Les chants de la cérémonie', 'Os cânticos da cerimônia')}
        </h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {songs.map((song, i) => (
            <div key={i} className="card-cantal p-5">
              <h3 className="font-display text-lg font-semibold text-center mb-1">
                {t(song.fr, song.pt)}
              </h3>
              <p className="font-body text-xs text-muted-foreground text-center mb-4">
                {song.fr} / {song.pt}
              </p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={song.url}
                  title={t(song.fr, song.pt)}
                  width="100%"
                  height="100%"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
