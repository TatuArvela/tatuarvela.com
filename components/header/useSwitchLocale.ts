import { useRouter } from "next/router";

const useSwitchLocale = () => {
  const router = useRouter();
  const { route } = router;

  return () => {
    switch (route) {
      case "/":
        return router.push("/fi", "/fi");
      case "/fi":
        return router.push("/", "/");
      default:
    }
  };
};

export default useSwitchLocale;
