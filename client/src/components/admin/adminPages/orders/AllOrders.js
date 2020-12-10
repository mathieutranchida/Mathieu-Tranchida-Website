import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import SideBar from "../../SideBar";
import AdminHeader from "../../adminHeader/index";
import Order from "./Order";

const AllOrders = () => {
  const orders = useSelector(
    (state) =>
      state.allOrdersReducer.orders && state.allOrdersReducer.orders.data
  );
  console.log(orders);
  return (
    <>
      {orders ? (
        <Wrapper>
          <SideBar />
          <MainWrapper>
            <Header>
              <Section>See all orders</Section>
              <AdminHeader />
            </Header>
            <OrdersWrapper>
              {orders &&
                orders
                  .map((order) => <Order key={order._id} {...order} />)
                  .reverse()}
            </OrdersWrapper>
          </MainWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <SideBar />
          <MainWrapper>
            <Header>
              <Section>See all orders</Section>
              <AdminHeader />
            </Header>
          </MainWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  width: calc(100vw - 300px);
`;

const Header = styled.div`
  border-bottom: 1px grey solid;
  border-image-source: linear-gradient(270deg, white 5%, grey 65%, grey 100%);
  border-image-slice: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

const Section = styled.div`
  font-weight: 500;
`;

const OrdersWrapper = styled.div`
  margin: 0px 25px;
`;

export default AllOrders;
