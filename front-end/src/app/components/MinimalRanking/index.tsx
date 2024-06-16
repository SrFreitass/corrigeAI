import bronze from '@/../public/icons/Ranking/medal-bronze.svg';
import gold from '@/../public/icons/Ranking/medal-gold-winner.svg';
import silver from '@/../public/icons/Ranking/medal-silver.svg';
import photoUser from '@/../public/images/avatar.png';
import { Section } from '@/components/ui/commons/section';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { UserRanking } from './subComponents/user';

export function MinimalRanking() {
  return (
    <Section>
      <div>
        <TitleSection>Ranking</TitleSection>
        <SubTitleSection className="text-secundary">
          Veja como você está se saindo em relação aos outros estudantes
        </SubTitleSection>
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
    </Section>
  );
}
