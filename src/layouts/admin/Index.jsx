import React from "react";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
import AdminContextContainer from "../../context/adminLayoutContext";
import Content from '../../pages/Content'

function Index() {
  

  return (
    <AdminContextContainer>
      <div>
        <Content/>
        <Navbar />
        <Sidebar />
      </div>
    </AdminContextContainer>
  );
}

export default Index;
