import { Button, type ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.dark,
  backgroundColor: 'transparent',
  transition: 'background-color 0.4s ease, color 0.4s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

type ElegantButtonProps = ButtonProps & {
  href?: string;
  target?: string;
  rel?: string;
};

export function ElegantButton(props: ElegantButtonProps) {
  return <StyledButton variant="outlined" disableElevation {...props} />;
}
