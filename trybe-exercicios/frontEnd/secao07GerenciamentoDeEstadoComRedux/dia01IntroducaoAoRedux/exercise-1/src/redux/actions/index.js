export const NEXT_COLOR = 'NEXT_COLOR';
export const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
export const RANDOM_COLOR = 'RANDOM_COLOR';

export const nextColor = () => ({
  type: NEXT_COLOR,
});

export const previousColor = () => ({
  type: PREVIOUS_COLOR,
});

export const randomColor = () => ({
  type: RANDOM_COLOR,
});
