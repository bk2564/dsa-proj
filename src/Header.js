import { Link } from "react-router-dom";

export default function Header({ title, subtitle, backTo, backLabel = "Back to Home" }) {
  return (
    <header className="border-b border-slate-700/60 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-6 py-6 text-white shadow-lg sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 items-center justify-between">
        {backTo ? (
          <Link
            to={backTo}
            className="w-fit text-sm font-medium text-blue-300 transition-colors hover:text-blue-200"
          >
            {backLabel}
          </Link>
        ) : null}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle ? <p className="text-sm text-slate-300 sm:text-base">{subtitle}</p> : null}
      </div>
    </header>
  );
}
