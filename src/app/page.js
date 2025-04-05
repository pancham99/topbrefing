
import Headlines from "@/components/Headlines";
import { base_api_url } from "@/config/config";
import Image from "next/image";


const Home = async () => {




  const news_data = await fetch(`${base_api_url}/api/all/news`, {
    next: {
      revalidate: 5
    },
  });

  const {news}  = await news_data?.json()

  
  return (
    <div>
      <main>
        <Headlines news={news} />
      </main>
    </div>
  );
}

export default Home
