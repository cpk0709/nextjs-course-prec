import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>THe Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
