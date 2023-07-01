import { render, screen } from '@testing-library/react'
import Modal from '@/app/components/modals/Modal';

describe('Modal', () => {
  it('모달 컴포넌트가 정상적으로 렌더링된다.', () => {
    render(
    <Modal 
      disabled
      isOpen
      title=""
      actionLabel=""
      onSubmit={()=>{}}
      onClose={()=>{}}
     />);

    expect(screen.getByTestId("Modal")).toBeInTheDocument();

  })
})