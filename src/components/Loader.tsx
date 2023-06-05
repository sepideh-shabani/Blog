type LoaderProps = {
  show: boolean;
};

function Loader({ show }: LoaderProps) {
  return show ? <div className="loader"></div> : null;
}

export default Loader;
