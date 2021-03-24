import { createRef, RefObject } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

import { IFoodProps } from '../../types';

interface ModalAddFood {
  isModalOpen: boolean;
  setIsModalOpen: () => void;
  handleAddFood: (food: IFoodProps) => void;
}

export default function ModalAddFood({ isModalOpen, setIsModalOpen, handleAddFood  }: ModalAddFood) {
  const formRef: RefObject<any> = createRef();

  function handleSubmit(data: IFoodProps) {
    handleAddFood(data);
    setIsModalOpen();
  };

  return (
    <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
