// import { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

// const blogPosts = [
//   {
//     id: 1,
//     title: 'Getting Started with React',
//     excerpt: 'Learn how to build modern UIs using React and its component-based architecture.',
//     thumbnail: '/images/react.png',
//     tags: ['React', 'Frontend'],
//     fullPostUrl: '/blog/react-intro'
//   },
//   {
//     id: 2,
//     title: 'Freelancing Tips for Developers',
//     excerpt: 'From finding clients to managing time, here are top freelancing tips for tech pros.',
//     thumbnail: '/images/freelancing.jpg',
//     tags: ['Freelancing', 'Career'],
//     fullPostUrl: '/blog/freelancing-tips'
//   },
//   {
//     id: 3,
//     title: 'Using Bootstrap in Your Portfolio',
//     excerpt: 'Boost your web presence with Bootstrap: components, responsiveness, and utilities.',
//     thumbnail: '/images/boostrap.png',
//     tags: ['Bootstrap', 'Portfolio'],
//     fullPostUrl: '/blog/bootstrap-portfolio'
//   }
// ];

// export default function BlogSection() {
//   return (
//     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {blogPosts.map(post => (
//        <Card key={post.id} className="mb-4">
//   <img 
//     src={post.thumbnail} 
//     alt={post.title} 
//     className="w-2 h-2 object-cover rounded mb-2" 
//   />
//   <CardContent>
//     <h3 className="text-xl font-semibold">{post.title}</h3>
//     <p className="text-gray-600">{post.excerpt}</p>
//     <div className="mt-2 flex gap-2">
//       {post.tags.map(tag => (
//         <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
//           #{tag}
//         </span>
//       ))}
//     </div>
//     <Button className="mt-4" onClick={() => window.location.href = post.fullPostUrl}>
//       Read More
//     </Button>
//   </CardContent>
// </Card>

//       ))}
//     </div>
//   );
// }
// //         style={{ borderRadius: '15px', border: 'none', backgroundColor: '#f8f9fa' }}