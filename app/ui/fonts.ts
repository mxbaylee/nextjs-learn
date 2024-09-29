import { Sacramento, Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lustina = Lusitana({
  subsets: ['latin'],
  weight: '400',
});
export const sac = Sacramento({
  weight: "400",
  preload: true,
  subsets: ['latin'],
});
