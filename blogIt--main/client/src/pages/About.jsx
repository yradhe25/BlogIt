export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
          Welcome to BlogIt!
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            At BlogIt, we believe that everyone has a story worth sharing and that every voice deserves to be heard. Our mission is to provide a dynamic and user-friendly platform where writers, creators, and thinkers from all backgrounds can come together to share their insights, experiences, and passions with the world.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. Sahand is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
