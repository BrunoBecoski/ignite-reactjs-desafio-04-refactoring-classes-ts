import { createRef, RefObject } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

import { IFoodProps } from '../../types';

interface ModalEditIFoodProps {
  handleUpdateFood: (data: IFoodProps) => void;
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: IFoodProps;
}

export default function ModalEditFood({
    handleUpdateFood, 
    setIsOpen, 
    isOpen, 
    editingFood 
  }: ModalEditIFoodProps) {

  const formRef: RefObject<any> = createRef();

  function handleSubmit(data: IFoodProps) {
    handleUpdateFood(data);
    setIsOpen();
  };
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
