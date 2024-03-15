import { Grid, IconButton } from '@mui/material';
import { FunctionComponent, SVGProps } from 'react';
import { ReactComponent as CvIcon } from './assets/cvicon.svg';
import { ReactComponent as BehanceIcon } from './assets/behanceicon.svg';
import { ReactComponent as LinkdnIcon } from './assets/linkdnicon.svg';
import { ReactComponent as MailIcon } from './assets/mailicon.svg';

interface LinkElements {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  href: string;
  oProps?: {
    download?: boolean;
    target?: string;
  };
}

const Links = () => {
  const linkList: LinkElements[] = [
    {
      Icon: CvIcon,
      href: `CV.txt`,
      oProps: {
        download: true,
      },
    },
    {
      Icon: BehanceIcon,
      href: `https://www.behance.net/KrapoPlay`,
      oProps: {
        target: `_blank`,
      },
    },
    {
      Icon: LinkdnIcon,
      href: `https://www.linkedin.com/in/nicolas-comte-785829ab`,
      oProps: {
        target: `_blank`,
      },
    },
    {
      Icon: MailIcon,
      href: `mailto:nicolas@grinehouse.fr`,
    },
  ];
  return (
    <Grid container marginTop={2}>
      <Grid item xs={0} md={4} />
      {linkList.map(({ Icon, href, oProps }) => (
        <Grid item xs={3} md={1}>
          <IconButton LinkComponent="a" href={href} {...(oProps || {})}>
            <Icon style={{ width: `100%` }} />
          </IconButton>
        </Grid>
      ))}
      <Grid item xs={0} md={4} />
    </Grid>
  );
};

export default Links;
