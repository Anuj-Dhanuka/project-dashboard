import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  proposals: {
    proposalId1: {
      logoImage: require("../../assets/images/logo.jpg"),
      sections: {
        cover: {
          title: "cover page",
          colors: { bgColor: "#003366", textColor: "#ffffff" },
          fonts: {
            fontFamily: "Arial",
            fontSizes: {
              title: "1.5rem",
              subtitle: "1.1rem",
              infoTitle: "1.8rem",
              infoText: "1.2rem",
            },
          },
          padding: "40px 20px",
          margin: "10px",
          content: {
            title: "Proposal for Your App Development",
            subtitle:
              "We are excited to present you with our detailed proposal for the project. This proposal outlines the services, costs, and timeline.",
            infoTitle: "Prepared for:",
            infoText1: "John Doe",
            infoText2: "123 Main St, New York, NY 10001",
          },
          images: {
            logoImage: require("../../assets/images/logo.jpg"),
            hexImages: [
              require("../../assets/images/cp_image1.jpg"),
              require("../../assets/images/cp_image2.jpg"),
              require("../../assets/images/cp_image4.jpg"),
              require("../../assets/images/cp_image3.jpg"),
            ],
          },
        },
        introduction: {
          title: "introduction page",
          images: {
            logoImage: require("../../assets/images/logo.jpg"),
          },
          companyTitle: "WELCOME TO PPC ROY",
          companyIntroduction:
            "PPC Roy is a leading IT solutions provider, specializing in cutting-edge technology and innovative software development. Our mission is to empower businesses by delivering tailored digital solutions that drive success and efficiency.",
          objectives: {
            card1: {
              title: "Focused Goals",
              description:
                "We’ll start by understanding your vision and objectives to ensure we are aligned with your expectations.",
            },
            card2: {
              title: "Strong Partnership",
              description:
                "Our commitment is to build a collaborative partnership, ensuring transparency and effective communication throughout the project.",
            },
            card3: {
              title: "Innovative Solutions",
              description:
                "Leveraging the latest technology and industry best practices, we will craft a solution tailored to your specific needs.",
            },
          },
          description:
            "These objectives are designed to ensure we achieve project success together. At PPC Roy, our dedicated team will focus on meeting your business needs through cutting-edge technology, strong communication, and a solution-driven approach. We believe that every project is a partnership, and together, we can achieve great results.",
        },
        workScope: {
          title: "workscope",
          images: {
            logoImage: require("../../assets/images/logo.jpg"),
            timeLineImages: [
              require("../../assets/images/cp_overview_strategy.jpg"),
              require("../../assets/images/cp_overview_development_image.jpg"),
              require("../../assets/images/cp_overview_launch_image.jpg"),
            ],
          },
          header: "Scope of Work",
          subHeader:
            "A detailed breakdown of key phases in our project journey, ensuring each milestone aligns with your vision and strategy.",
          timelineItems: {
            item1: {
              title: "Ideation & Strategy",
              date: "Jan 2024 - Feb 2024",
              description:
                "Collaborate with your team to brainstorm innovative ideas, define goals, and develop a strategic roadmap.",
              icon: "FaLightbulb",
            },
            item2: {
              title: "Development & Prototyping",
              date: "Mar 2024 - May 2024",
              description:
                "Build a functional prototype and conduct testing to ensure the product meets expectations before moving forward.",
              icon: "FaCogs",
            },
            item3: {
              title: "Launch & Delivery",
              date: "Jun 2024 - Jul 2024",
              description:
                "After final refinements, launch the product with post-launch support to ensure smooth operations.",
              icon: "FaRocket",
            },
          },
        },
        investmentPlan: {
          title: "investment plan",
          images: {
            logoImage: require("../../assets/images/logo.jpg"),
          },
          sectionTitle: "Investment Plan Summary",
          subTitle: "Customize your services and explore the timeline",
          description1:
            "Thank you for considering our services! We specialize in web design, logo design, and SEO optimization to elevate your business's online presence. Our dedicated team ensures quality and timely delivery.",
          description2:
            "If you have any questions or need further assistance, feel free to reach out to us at support@yourcompany.com or call us at (123) 456-7890. We're here to help!",
          services: [
            { name: "Web Design", price: 30000, quantity: 1 },
            { name: "Logo Design", price: 20000, quantity: 1 },
            { name: "SEO Optimization", price: 10000, quantity: 0 },
            {
              name: "Maintenance Cost (After 6 Months)",
              price: 5000,
              quantity: 0,
            },
          ],
          discountThreshold: 100000,
          discountRate: 0.1,
          totalCost: 0,
          discountedTotal: 0,
        },
        nextSteps: {
          title: "next steps",
          images: {
            logoImage: require("../../assets/images/logo.jpg"),
          },
          sectionTitle: "Next Steps to Finalize",
          steps: [
            {
              title: "Review Proposal",
              description:
                "Ensure all terms, costs, and scope align with your expectations.",
              icon: "FaCheckCircle",
            },
            {
              title: "Sign Agreement",
              description:
                "Confirm acceptance by signing the proposal and sending it back to us to proceed.",
              icon: "FaFileSignature",
            },
            {
              title: "Schedule a Call",
              description:
                "Arrange a follow-up call if further clarifications are needed.",
              icon: "FaPhone",
            },
            {
              title: "Contact Support",
              description:
                "Reach out via email or phone for any additional questions.",
              icon: "FaEnvelope",
            },
          ],
          contact: {
            contactTitle: "Contact Information",
            phoneTitle: "Phone:",
            phoneText: "+1 (234) 567-890",
            emailTitle: "Email:",
            emailText: "support@example.com",
            addressTitle: "Office Hours:",
            addressText: "Mon-Fri, 9 AM - 6 PM (EST)",
          },
        },
        thankYouAndServices: {
          title: "thank you and services",
          images: {
            logoImage: require("../../assets/images/logo.jpg"),
          },
          sectionTitle: "Thank You for Choosing Us!",
          message: "We are excited to have you onboard! Our commitment to excellence ensures that you receive the best quality of service. Take a look at the specialized services we offer to help your business thrive.",
          services: [
            {
              icon: "FaLaptopCode",
              title: "Web Development",
              description: "From corporate websites to e-commerce platforms, we create beautiful, functional, and responsive websites to elevate your business.",

            },
            {
              icon: "FaMobileAlt",
              title: "Mobile App Development",
              description: "We build user-centric mobile apps that provide an immersive experience for both iOS and Android users, tailored to your business needs."
            },
            {
              icon: "FaCog",
              title: "Support & Maintenance",
              description: "Our dedicated team provides ongoing support and maintenance to keep your digital products running smoothly and up-to-date."
            },
            {
              icon: "FaHandshake",
              title: "Business Consulting",
              description: "We offer strategic consulting to help you navigate the digital world, boost your efficiency, and optimize business operations."
            },
          ],
          contact: {
            contactTitle: "For any queries or further information, feel free to reach out to us:",
            email: "Email: support@yourcompany.com",
            phone: "Phone: +1 123 456 7890",
            address: "Address: 1234 Your Street, Your City, Your Country",
          }
        },
      },
    },
  },
};

// Add action to update font sizes
const createProposalsSlice = createSlice({
  name: "createProposals",
  initialState,
  reducers: {
    //Cover Section Related Actions
    updateCoverContent: (state, action) => {
      const { proposalId, updatedFields } = action.payload;
      state.proposals[proposalId].sections.cover = {
        ...state.proposals[proposalId].sections.cover,
        ...updatedFields,
      };
    },
    updateCoverImages: (state, action) => {
      const { proposalId, images } = action.payload;
      state.proposals[proposalId].sections.cover.images = images;
    },
    updateProposalLogo: (state, action) => {
      const { proposalId, logo } = action.payload;
      state.proposals[proposalId].logoImage = logo;
    },
    updateCoverStyle: (state, action) => {
      const { proposalId, style } = action.payload;
      state.proposals[proposalId].sections.cover = {
        ...state.proposals[proposalId].sections.cover,
        ...style,
      };
    },
    updateCoverFontSize: (state, action) => {
      const { proposalId, fontSizes } = action.payload;
      state.proposals[proposalId].sections.cover.fonts.fontSizes = {
        ...state.proposals[proposalId].sections.cover.fonts.fontSizes,
        ...fontSizes,
      };
    },

    //Introduction Related Actions
    updateIntroductionContent: (state, action) => {
      const { proposalId, updatedFields } = action.payload;
      state.proposals[proposalId].sections.introduction = {
        ...state.proposals[proposalId].sections.introduction,
        ...updatedFields,
      };
    },

    //Work Scope Related Actions
    updateWorkScope: (state, action) => {
      const { proposalId, header, subHeader, timelineItems } = action.payload;

      // Update header and subHeader if provided
      if (header)
        state.proposals[proposalId].sections.workScope.header = header;
      if (subHeader)
        state.proposals[proposalId].sections.workScope.subHeader = subHeader;

      // Update timeline items if provided
      if (timelineItems) {
        Object.keys(timelineItems).forEach((itemKey) => {
          state.proposals[proposalId].sections.workScope.timelineItems[
            itemKey
          ] = {
            ...state.proposals[proposalId].sections.workScope.timelineItems[
              itemKey
            ],
            ...timelineItems[itemKey],
          };
        });
      }
    },
    updateWorkScopeImages: (state, action) => {
      const { proposalId, images } = action.payload;
      state.proposals[proposalId].sections.workScope.images = {
        ...state.proposals[proposalId].sections.workScope.images,
        ...images,
      };
    },
    updateWorkScopeTimelineItemIcon: (state, action) => {
      const { proposalId, itemKey, icon } = action.payload;
      state.proposals[proposalId].sections.workScope.timelineItems[
        itemKey
      ].icon = icon;
    },

    //Investment Plan Related Actions
    updateInvestmentPlanContent: (state, action) => {
      const { proposalId, updatedFields } = action.payload;
      state.proposals[proposalId].sections.investmentPlan = {
        ...state.proposals[proposalId].sections.investmentPlan,
        ...updatedFields,
      };
    },

    //Next Steps Related Actions
    updateNextStepsContent: (state, action) => {
      const { proposalId, updatedFields } = action.payload;
      state.proposals[proposalId].sections.nextSteps = {
        ...state.proposals[proposalId].sections.nextSteps,
        ...updatedFields,
      };
    },

    //Thank You And Services Related Actions
    updateThankYouAndServices : (state, action) => {
      const { proposalId, updatedFields } = action.payload;
      state.proposals[proposalId].sections.thankYouAndServices = {
        ...state.proposals[proposalId].sections.thankYouAndServices,
        ...updatedFields,
      };
    }
  },
});

export const {
  //Cover Section Actions
  updateCoverContent,
  updateCoverImages,
  updateProposalLogo,
  updateCoverStyle,
  updateCoverFontSize,
  //Introduction Section Actions
  updateIntroductionContent,
  updateIntroductionObjectiveCard,
  //Workscope Section Actions
  updateWorkScope,
  updateWorkScopeImages,
  updateWorkScopeTimelineItemIcon,
  //Investment Section Actions
  updateInvestmentPlanContent,
  //Next Step Section Actions
  updateNextStepsContent,
  //Thank You And Services Actions
  updateThankYouAndServices,
} = createProposalsSlice.actions;

export default createProposalsSlice.reducer;
