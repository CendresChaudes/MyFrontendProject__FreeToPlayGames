type LogoProps = {
  className: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      className={className}
      src="img/logo.svg"
      width={200}
      height={50}
      alt="Logo."
    />
  );
}
