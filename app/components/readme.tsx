import { Code, MantineProvider } from '@mantine/core';

const Readme = () => (
  <div className="">
      A basic calculator to learn Next.js

      <h1 className="font-bold mt-5 mb-5">Getting Started</h1>

      First, run the development server:<br /><br />

      <MantineProvider>
        <Code>
        npm run dev
        </Code>
      </MantineProvider><br /><br />

      Open <a href="http://localhost:3000">http://localhost:3000</a> with your browser to see the result.
  </div>
);
  
export default Readme;