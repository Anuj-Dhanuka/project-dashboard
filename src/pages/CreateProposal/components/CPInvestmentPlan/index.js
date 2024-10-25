import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//Common Utils
import {
  defaultProposalId,
  proposalPageWidth,
} from "../../../../utils/constants";

//Common Utils //Common Functions
import {
  saveCaretPosition,
  restoreCaretPosition,
} from "../../../../utils/CommonUtils/commonFunctions/index.js";

//Redux
import { updateInvestmentPlanContent } from "../../../../redux/slices";

const CPInvestmentPlan = () => {
  const dispatch = useDispatch();

  const logoImage = useSelector(
    (state) => state.createProposals.proposals[defaultProposalId]?.logoImage
  );
  const investmentSection = useSelector(
    (state) =>
      state.createProposals.proposals[defaultProposalId]?.sections
        .investmentPlan
  );
  const { sectionTitle, subTitle, description1, description2 /*services*/ } =
    investmentSection;

  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const description1Ref = useRef(null);
  const description2Ref = useRef(null);

  // Editable service prices and quantities
  const [webDesignQty, setWebDesignQty] = useState(1);
  const [maintenanceCostQuantity, setMaintenanceCostQuantity] = useState(0);
  const [logoDesignQty, setLogoDesignQty] = useState(1);
  const [seoQty, setSeoQty] = useState(0);
  const [webDesignPrice, setWebDesignPrice] = useState(30000);
  const [logoDesignPrice, setLogoDesignPrice] = useState(20000);
  const [seoPrice, setSeoPrice] = useState(10000);
  const [maintenanceCost, setMaintenanceCost] = useState(5000);

  const totalWebAndLogo =
    webDesignQty * webDesignPrice +
    logoDesignQty * logoDesignPrice +
    seoQty * seoPrice;

  const discount = totalWebAndLogo > 100000 ? 0.1 : 0;
  const totalCost = totalWebAndLogo + maintenanceCost;
  const discountedTotal = totalCost - totalCost * discount;

  const handleTextChange = (ref, key) => {
    const caretPosition = saveCaretPosition(ref.current);

    const updatedContent = {
      ...investmentSection,
      [key]: ref.current.textContent,
    };

    dispatch(
      updateInvestmentPlanContent({
        proposalId: defaultProposalId,
        updatedFields: updatedContent,
      })
    );

    setTimeout(() => {
      restoreCaretPosition(ref.current, caretPosition);
    }, 0);
  };

  return (
    <Container>
      <LogoContainer>
        <Logo src={logoImage} alt="PPC Roy Logo" />
      </LogoContainer>

      <Header>
        <Title
          contentEditable
          suppressContentEditableWarning
          ref={titleRef}
          onInput={() => handleTextChange(titleRef, "sectionTitle")}
        >
          {sectionTitle}
        </Title>
        <SubTitle
          contentEditable
          suppressContentEditableWarning
          ref={subTitleRef}
          onInput={() => handleTextChange(subTitleRef, "subTitle")}
        >
          {subTitle}
        </SubTitle>
      </Header>

      <Description
        contentEditable
        suppressContentEditableWarning
        ref={description1Ref}
        onInput={() => handleTextChange(description1Ref, "description1")}
      >
        {description1}
      </Description>

      <Table>
        <thead>
          <tr>
            <Th>Service</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Total</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Web Design</Td>
            <Td>
              <Input
                type="number"
                value={webDesignPrice}
                onChange={(e) =>
                  setWebDesignPrice(Math.max(0, parseInt(e.target.value) || 0))
                }
              />
            </Td>
            <QuantityTd>
              <Input
                type="number"
                value={webDesignQty}
                onChange={(e) =>
                  setWebDesignQty(Math.max(1, parseInt(e.target.value) || 1))
                }
              />
            </QuantityTd>
            <Td>${(webDesignQty * webDesignPrice).toLocaleString()}</Td>
          </tr>
          <tr>
            <Td>Logo Design</Td>
            <Td>
              <Input
                type="number"
                value={logoDesignPrice}
                onChange={(e) =>
                  setLogoDesignPrice(Math.max(0, parseInt(e.target.value) || 0))
                }
              />
            </Td>
            <QuantityTd>
              <Input
                type="number"
                value={logoDesignQty}
                onChange={(e) =>
                  setLogoDesignQty(Math.max(1, parseInt(e.target.value) || 1))
                }
              />
            </QuantityTd>
            <Td>${(logoDesignQty * logoDesignPrice).toLocaleString()}</Td>
          </tr>
          <tr>
            <Td>SEO Optimization</Td>
            <Td>
              <Input
                type="number"
                value={seoPrice}
                onChange={(e) =>
                  setSeoPrice(Math.max(0, parseInt(e.target.value) || 0))
                }
              />
            </Td>
            <QuantityTd>
              <Input
                type="number"
                value={seoQty}
                onChange={(e) =>
                  setSeoQty(Math.max(0, parseInt(e.target.value) || 0))
                }
              />
            </QuantityTd>
            <Td>${(seoQty * seoPrice).toLocaleString()}</Td>
          </tr>
          <tr>
            <Td>Maintenance Cost (After 6 Months)</Td>
            <Td>
              <Input
                type="number"
                value={maintenanceCost}
                onChange={(e) =>
                  setMaintenanceCost(Math.max(0, parseInt(e.target.value) || 0))
                }
              />
            </Td>
            <Td>
              <Input
                type="number"
                value={maintenanceCostQuantity}
                onChange={(e) =>
                  setMaintenanceCostQuantity(
                    Math.max(1, parseInt(e.target.value) || 1)
                  )
                }
              />
            </Td>
            <Td>
              ${(maintenanceCostQuantity * maintenanceCost).toLocaleString()}
            </Td>
          </tr>
        </tbody>
      </Table>

      {discount > 0 && (
        <DiscountNotice>
          Congratulations! A 10% discount has been applied.
        </DiscountNotice>
      )}

      <TotalCost high={totalCost > 100000 ? "true" : undefined}>
        Total Cost: ${discountedTotal.toLocaleString()}
      </TotalCost>

      <Description
        contentEditable
        suppressContentEditableWarning
        ref={description2Ref}
        onInput={() => handleTextChange(description2Ref, "description2")}
      >
        {description2}
      </Description>
    </Container>
  );
};

const Container = styled.div`
  width: ${proposalPageWidth};
  margin: 60px auto;
  padding: 50px 36px;
  background-color: #1c1c1e;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  color: #fff;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 60px;
  height: auto;
  margin-bottom: 30px;
  border-radius: 100px;
  align-self: flex-start;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #00cec9;
  outline: none;
  cursor: text;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #a4b0be;
  outline: none;
  cursor: text;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const Description = styled.p`
  color: #dcdde1;
  margin: 1rem 0;
  line-height: 1.5;
  outline: none;
  cursor: text;

  &:focus {
    border-bottom: 1px dashed #2c3e50;
  }
`;

const Table = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #2f3640;
  padding: 1rem;
  text-align: left;
  color: #f1f1f1;
  border-bottom: 2px solid #353b48;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #353b48;
  color: #dcdde1;
`;

const QuantityTd = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #353b48;
  color: #dcdde1;
  text-align: center;
`;

const Input = styled.input`
  width: 100px;
  padding: 0.5rem;
  border: 1px solid #636e72;
  border-radius: 6px;
  text-align: center;
  background-color: #dfe6e9;
`;

const TotalCost = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.high ? "#e74c3c" : "#f39c12")};
  text-align: right;
  margin-top: 1.5rem;
`;

const DiscountNotice = styled.p`
  color: #00cec9;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 1rem;
`;


export default CPInvestmentPlan;
