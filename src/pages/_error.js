import Link from "next/link";
function Error({ statusCode }) {
  return <>
    <div className="flex justify-center">
      <p>
        {statusCode
          ? `An error ${404} : Page cannot be found`
          : "An error occurred on client"}
      </p>
    </div>
    <div className="flex justify-center">
      You can press <kbd class="kbd kbd-sm">R</kbd> to retry. or
    </div>
    <div className="flex justify-center">
      <Link href="/" legacyBehavior>
        <button class="btn btn-error">Back to Home</button>
      </Link>
    </div>
  </>;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
