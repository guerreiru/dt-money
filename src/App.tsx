import React from "react";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransitionModalOpen, setIsNewTransitionModalOpen] =
    React.useState(false);

  function handleOpenModal() {
    console.log(isNewTransitionModalOpen);

    setIsNewTransitionModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewTransitionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransitionModal={handleOpenModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransitionModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}
