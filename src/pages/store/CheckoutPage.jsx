// CheckoutPage.js
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";  // Importar useNavigate
import "./CheckoutPage.css";

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();  // Substituir useHistory por useNavigate

  // Pegue as informações do carrinho da página anterior
  const { cart } = location.state || { cart: [] };

  // Estados para os dados do cliente
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    address: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Função para enviar o pedido para o banco de dados
  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderData = {
      customer: customerData,
      cart: cart,
      totalPrice: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      status: "Pendente", // Estado inicial do pedido
      date: new Date().toISOString()
    };

    // Enviar o pedido para o banco de dados (faça a requisição POST aqui)
    try {
      await fetch("https://seu-banco-de-dados.com/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
      });

      // Após a requisição, redirecionar para uma página de sucesso ou confirmação
      alert("Pedido realizado com sucesso! Você será contatado para combinar a entrega.");
      navigate("/"); // Voltar para a página inicial ou outra página após o envio
    } catch (error) {
      alert("Ocorreu um erro ao processar o pedido.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Finalize sua Compra</h2>

      <div className="cart-summary">
        <h3>Resumo do Pedido</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p>
          <strong>
            Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </strong>
        </p>
      </div>

      <form onSubmit={handleCheckoutSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              value={customerData.name}
              onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              value={customerData.email}
              onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Endereço:
            <input
              type="text"
              value={customerData.address}
              onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
              required
            />
          </label>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Finalizar Compra"}
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
