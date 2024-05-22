import { FC } from 'react';
import MobileBattleNet from '../../components/MobileBattleNet';

const DesktopPage: FC = () => {

  return (
    <main>
      <section className='bg-[url("/mobile-battle-net/background-and-image.png")] bg bg-no-repeat'>
        <p>siema</p>
      </section>

      <MobileBattleNet />
    </main>
  );
}

export default DesktopPage;