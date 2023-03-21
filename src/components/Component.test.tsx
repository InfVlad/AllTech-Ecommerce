import { render } from '@testing-library/react';
import type { ButtonProps } from '~/components/Component';
import { Button } from '~/components/Component';
// import { expect, test, describe } from 'vitest';

const makeSut = (props: Partial<ButtonProps>) => {
  return render(<Button label='label' {...props} />);
};

describe('<Button />', () => {
  test('Should render label correctly', () => {
    const { getByText } = makeSut({ label: 'My Button' });

    expect(getByText(/My Button/)).toBeInTheDocument();
  });

  // test('Should call onClick successfully', () => {

  //   const { getByText } = makeSut({ onClick: spy });

  //   fireEvent.click(getByText(/label/));

  //   expect(spy).toHaveBeenCalled();
  // });
});
