import css from './Button.module.css';
export const Button = ({ text, clickHandler, type }) => {
  return (
    <button type={type} onClick={clickHandler}>
      {text}
    </button>
  );
};

export const IButton = ({ children, clickHandler, ...allyProps }) => (
  <button
    type="button"
    className={css.IButton}
    onClick={clickHandler}
    {...allyProps}
  >
    {children}
  </button>
);
