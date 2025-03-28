import { LoginForm } from "@/components/LoginForm";
import spacePicture from "/assets/images/lucid.jpg";

type LandingPageProps = {};

const LandingPage = ({}: LandingPageProps): React.ReactNode => {
  return (
    <div className="grid h-full lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-4 pb-5 items-center w-3/5">
          <h1
            className="scroll-m-20 dark:text-stone-300 text-stone-300  text-4xl font-extrabold tracking-tight lg:text-6xl"
            style={{ textShadow: "0.35rem 0.35rem 0.35rem rebeccapurple" }}
          >
            Shifting Shadows
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Trace and follow your thoughts they come into your mind everywhere.
            Don't let them run away, instead try to understand the meaning
          </p>
        </div>
        <div className="flex  items-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={spacePicture}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.4] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default LandingPage;
