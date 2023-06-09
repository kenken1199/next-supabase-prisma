"use client";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, error } = useSWR("api/user", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>Now loading...</div>;
  return (
    <ul>
      {data.map((post: any) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
};

export default Home;
