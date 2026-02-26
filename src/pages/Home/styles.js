import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Card = styled.div`
  background: #111827;
  width: 100%;
  max-width: 650px;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
`;

export const ImageArea = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 25px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 600;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  .full {
    grid-column: span 2;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    .full {
      grid-column: span 1;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #cbd5e1;
  font-size: 14px;
  margin-bottom: 6px;

  span {
    color: #ef4444;
  }
`;

export const Input = styled.input`
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #334155;
  background: #020617;
  color: white;
  font-size: 15px;
  transition: 0.3s;

  &:focus {
    border-color: #22c55e;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.3);
    outline: none;
  }

  &::placeholder {
    color: #64748b;
  }
`;

export const Button = styled.button`
  grid-column: span 2;
  margin-top: 10px;
  padding: 14px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  font-size: 16px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(34, 197, 94, 0.4);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 600px) {
    grid-column: span 1;
  }
`;
