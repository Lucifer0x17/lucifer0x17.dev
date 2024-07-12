import { useState, useEffect } from 'react';
import request from 'graphql-request';
import { PostsByPublicationDocument } from '../pages/(graphql)/schema';
import Link from 'next/link';
import Head from 'next/head';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

// Function to format date as "Sep 21, 2023"
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default function Blog() {
  const [profile, setProfile] = useState({
    name: '',
    logo: '',
    posts: [],
    url: ''
  });

  const loadMore = async () => {
    try {
      const data = await request(GQL_ENDPOINT, PostsByPublicationDocument, {
        first: 20,
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST
      });

      const formattedPosts = data.publication.posts.edges.map((edge) => ({
        title: edge.node.title,
        publishedAt: formatDate(edge.node.publishedAt), // Format date using formatDate function
        url: edge.node.url
      }));

      setProfile({
        name: data.publication.author.name,
        logo: data.publication.author.profilePicture,
        posts: formattedPosts,
        url: data.publication.posts.edges[0].node.url
      });
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  };

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <div className="text-white font-sans">
      <Head>
        <title>blogs</title>
      </Head>
      <main className="">
        <div className="flex flex-col">
          {profile.posts.map((post, index) => (
           <div key={index} className="">
           <Link href={post.url} className="text-white no-underline flex flex-col">
             <h3 className="text-white text-lg leading-1 tracking-tighter mb-[2px]">
               {post.title}
             </h3>
             <p className="text-[#a3a3a3] text-[14px]">{post.publishedAt}</p>
           </Link>
         </div>
          ))}
        </div>
      </main>
    </div>
  );
}
