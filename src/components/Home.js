import {
  gradientBackgroundStyle,
  waveBackgroundStyle,
} from "../utils/constants";
const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={(gradientBackgroundStyle, waveBackgroundStyle)}
    >
      <h1 className="font-bold text-3xl mb-4">
        Check all your OTT subscriptions at one place
      </h1>
      <h1 className="font-semibold text-3xl">Sign-Up Today to Get Started</h1>
    </div>
  );
};

export default Home;
