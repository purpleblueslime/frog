import '../styles/all.scss';

export default function html({ children }) {
  return (
    <html>
      <head>
        <link rel='icon' type='image/png' href='/kuru.png' />
        <title>kuru</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
