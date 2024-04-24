class Person {
    constructor(name, email, phone, address, education, experience) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.address = address;
      this.education = education;
      this.experience = experience;
    }
  
    displayPersonalInfo() {
      console.log("Personal Information:");
      console.log(`Name: ${this.name}`);
      console.log(`Email: ${this.email}`);
      console.log(`Phone: ${this.phone}`);
      console.log(`Address: ${this.address}`);
    }
  
    displayEducation() {
      console.log("\nEducation:");
      this.education.forEach((edu) => {
        console.log(`Degree: ${edu.degree}`);
        console.log(`University: ${edu.university}`);
        console.log(`Graduation Year: ${edu.graduation_year}`);
      });
    }
  
    displayExperience() {
      console.log("\nExperience:");
      this.experience.forEach((exp) => {
        console.log(`Title: ${exp.title}`);
        console.log(`Company: ${exp.company}`);
        console.log(`Location: ${exp.location}`);
        console.log(`Start Date: ${exp.start_date}`);
        console.log(`End Date: ${exp.end_date || "Present"}`);
        console.log("Responsibilities:");
        exp.responsibilities.forEach((resp, index) => {
          console.log(`${index + 1}. ${resp}`);
        });
      });
    }
  }
  
  // Example usage:
  const person = new Person(
    "John Doe",
    "john.doe@example.com",
    "123-456-7890",
    "123 Main Street, City, Country",
    [
      {
        degree: "Bachelor of Science in Computer Science",
        university: "University of XYZ",
        graduation_year: 2015,
      },
      {
        degree: "Master of Business Administration",
        university: "ABC Business School",
        graduation_year: 2017,
      },
    ],
    [
      {
        title: "Software Engineer",
        company: "Tech Solutions Inc.",
        location: "City, Country",
        start_date: "2017-06-01",
        end_date: "2020-05-31",
        responsibilities: [
          "Developed web applications using JavaScript, HTML, and CSS.",
          "Collaborated with cross-functional teams to deliver high-quality software products.",
          "Participated in code reviews and provided constructive feedback.",
        ],
      },
      {
        title: "Product Manager",
        company: "Innovate Tech LLC",
        location: "City, Country",
        start_date: "2020-06-01",
        end_date: null,
        responsibilities: [
          "Led product development lifecycle from ideation to launch.",
          "Conducted market research and competitor analysis.",
          "Defined product roadmap and prioritized features.",
        ],
      },
    ]
  );
  
  person.displayPersonalInfo();
  person.displayEducation();
  person.displayExperience();

  class UberPriceCalculator {
    constructor(baseFare, ratePerKm) {
      this.baseFare = baseFare;
      this.ratePerKm = ratePerKm;
    }
  
    calculatePrice(distanceInKm) {
      return this.baseFare + this.ratePerKm * distanceInKm;
    }
  }
  
  // Example usage:
  const baseFare = 5; // Base fare in $
  const ratePerKm = 2; // Rate per kilometer in $
  const calculator = new UberPriceCalculator(baseFare, ratePerKm);
  
  // Calculate price for different distances
  const distance1 = 10; // Distance in kilometers
  const price1 = calculator.calculatePrice(distance1);
  console.log(`Price for ${distance1} km: $${price1}`);
  
  const distance2 = 15; // Distance in kilometers
  const price2 = calculator.calculatePrice(distance2);
  console.log(`Price for ${distance2} km: $${price2}`);
  