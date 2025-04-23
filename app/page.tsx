import Readme from './components/readme';

export default function Home() {

  return (
    <div className="mt-[50px]">
      <nav className="grid justify-center">
        <ol>
          <li><a className="underline" href="/calculator">Calculator</a></li>
        </ol>
      </nav>
      <div className="m-[20px]">
        <Readme />
      </div>
    </div>
  );
}
