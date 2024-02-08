import gold from '@/../public/icons/Ranking/medal-gold-winner.svg';
import silver from '@/../public/icons/Ranking/medal-silver.svg';
import bronze from '@/../public/icons/Ranking/medal-bronze.svg';
import photoUser from '@/../public/images/avatar.png';
import { UserRanking } from './User';

export function MinimalRanking() {
  return (
    <section className=" bg-white shadow-md p-8 flex flex-col gap-6 rounded-bg dark:bg-dark">
      <div>
        <h2 className="text-primary dark:text-white text-2xl font-semibold">
          Ranking
        </h2>
        <h3 className="text-secundary">
          Veja como você está se saindo em relação aos outros estudantes
        </h3>
      </div>
      <ul className="flex flex-col gap-5 font-semibold">
        <UserRanking
          position={1}
          name="Nanael Anjo Pueril"
          medalSrc={gold}
          userAvatarSrc={photoUser.src}
        />
        <UserRanking
          position={2}
          name="Nanael Anjo Pueril"
          medalSrc={silver}
          userAvatarSrc={photoUser.src}
        />
        <UserRanking
          position={3}
          name="Nanael Anjo Pueril"
          medalSrc={bronze}
          userAvatarSrc={photoUser.src}
        />
        <UserRanking
          position={4}
          name="Nanael Anjo Pueril"
          userAvatarSrc={photoUser.src}
        />
        <UserRanking position={150} name="Você" userAvatarSrc={photoUser.src} />
      </ul>
    </section>
  );
}
