import clsx from 'clsx';

type LogoProps = {
  className: string;
  path?: string;
}

export function Logo({ className, path }: LogoProps) {
  return (
    <img
      className={clsx('logo', className)}
      src={path || 'img/logo.svg'}
      alt="Logo."
    />
  );
}
