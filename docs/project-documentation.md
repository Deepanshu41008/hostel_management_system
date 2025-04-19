# Hostel Management System - IIT Indore

## Project Overview

The Hostel Management System is a web application designed for IIT Indore to manage hostel operations, student accommodations, and related administrative tasks. This documentation provides a comprehensive overview of the project structure, components, and functionality.

## Directory Structure

```
hostel-management-system-frontend/
├── public/
│   └── IITILogo.png                  // Institute logo used as favicon and PWA icon
├── src/
│   ├── components/                   // Reusable UI components
│   │   ├── common/                   // Shared components used across the application
│   │   ├── admin/                    // Admin-specific components
│   │   ├── student/                  // Student-specific components
│   │   └── warden/                   // Warden-specific components
│   ├── pages/                        // Main application pages
│   │   ├── admin/                    // Admin dashboard and management pages
│   │   ├── student/                  // Student portal pages
│   │   ├── warden/                   // Warden management pages
│   │   ├── auth/                     // Authentication pages (login, register)
│   │   ├── common/                   // Shared pages (landing, error, etc.)
│   │   ├── Homepage.jsx              // Homepage content
│   │   ├── Complaints.jsx            // Complaints page
│   │   ├── Students.jsx              // Students page
│   │   ├── Events.jsx                // Events page
│   │   ├── VisitorRequests.jsx       // Visitor requests page
│   │   ├── LostAndFound.jsx          // Lost and found page
│   │   ├── Profile.jsx               // Profile page
│   │   ├── NotificationCenter.jsx    // Notification center page
│   │   └── Settings.jsx              // Settings page
│   ├── contexts/                     // React context providers
│   ├── hooks/                        // Custom React hooks
│   ├── services/                     // API and service integrations
│   ├── utils/                        // Utility functions and helpers
│   ├── assets/                       // Static assets (images, icons)
│   ├── styles/                       // Global styles and theme configurations
│   ├── App.jsx                       // Main application component
│   ├── main.jsx                      // Application entry point
│   └── routes.jsx                    // Application routing configuration
├── index.html                        // HTML entry point
├── vite.config.js                    // Vite configuration
├── tailwind.config.js                // Tailwind CSS configuration
├── eslint.config.js                  // ESLint configuration
└── package.json                      // Project dependencies and scripts
```

## Key Components

### Authentication Components

#### Login Component
- **Location**: `/src/pages/auth/Login.jsx`
- **Purpose**: Handles user authentication for different roles (admin, student, warden)
- **Key Features**:
  - Google OAuth integration
  - Role-based login forms
  - Authentication state management
  - Error handling and validation
- **Related Components**: Registration, ForgotPassword

#### Registration Component
- **Location**: `/src/pages/auth/Register.jsx`
- **Purpose**: Allows new users to create accounts
- **Key Features**:
  - User information collection
  - Role selection
  - Form validation
  - Account creation process
- **Related Components**: Login

### Admin Components

#### AdminDashboard
- **Location**: `/src/pages/admin/Dashboard.jsx`
- **Purpose**: Central hub for administrators to monitor and manage the hostel system
- **Key Features**:
  - Statistical overview of hostel occupancy
  - Quick access to management functions
  - Notification center for pending requests
  - System health monitoring
- **Related Components**: UserManagement, HostelManagement

#### UserManagement
- **Location**: `/src/pages/admin/UserManagement.jsx`
- **Purpose**: Interface for managing system users
- **Key Features**:
  - User creation, editing, and deactivation
  - Role assignment
  - Bulk user import/export
  - User search and filtering
- **Related Components**: UserForm, UserList

#### HostelManagement
- **Location**: `/src/pages/admin/HostelManagement.jsx`
- **Purpose**: Tools for managing hostel properties and rooms
- **Key Features**:
  - Hostel creation and configuration
  - Room type management
  - Capacity planning
  - Maintenance scheduling
- **Related Components**: RoomAllocation, MaintenanceRequests

### Student Components

#### StudentDashboard
- **Location**: `/src/pages/student/Dashboard.jsx`
- **Purpose**: Home screen for student users
- **Key Features**:
  - Room information display
  - Announcements and notices
  - Quick access to request forms
  - Payment status and history
- **Related Components**: RoomDetails, PaymentHistory

#### RoomAllocation
- **Location**: `/src/pages/student/RoomAllocation.jsx`
- **Purpose**: Interface for students to view and request room allocations
- **Key Features**:
  - Available room browsing
  - Room preference submission
  - Roommate selection
  - Allocation status tracking
- **Related Components**: RoomDetails, RoomPreferenceForm

#### MaintenanceRequest
- **Location**: `/src/pages/student/MaintenanceRequest.jsx`
- **Purpose**: System for students to report maintenance issues
- **Key Features**:
  - Issue categorization
  - Description and photo submission
  - Request tracking
  - Communication with maintenance staff
- **Related Components**: RequestHistory, RequestForm

### Warden Components

#### WardenDashboard
- **Location**: `/src/pages/warden/Dashboard.jsx`
- **Purpose**: Management interface for hostel wardens
- **Key Features**:
  - Hostel occupancy overview
  - Student list by room/floor
  - Pending request management
  - Announcement creation
- **Related Components**: StudentDirectory, AnnouncementManager

#### RequestApproval
- **Location**: `/src/pages/warden/RequestApproval.jsx`
- **Purpose**: Interface for reviewing and approving student requests
- **Key Features**:
  - Request queue management
  - Approval/rejection workflow
  - Comment and feedback system
  - Request history and audit trail
- **Related Components**: RequestDetails, ApprovalHistory

#### AttendanceManagement
- **Location**: `/src/pages/warden/AttendanceManagement.jsx`
- **Purpose**: System for tracking student attendance and presence
- **Key Features**:
  - QR code based check-in/out
  - Manual attendance recording
  - Absence reporting
  - Attendance reports and analytics
- **Related Components**: QRScanner, AttendanceReports

### Common Components

#### QRCodeScanner
- **Location**: `/src/components/common/QRCodeScanner.jsx`
- **Purpose**: Reusable component for scanning QR codes
- **Key Features**:
  - Camera access and management
  - QR code detection and parsing
  - Error handling
  - Scanning history
- **Props**:
  - `onScan`: Function called with scan result
  - `onError`: Error handling callback
  - `scanDelay`: Time between scan attempts

#### QRCodeGenerator
- **Location**: `/src/components/common/QRCodeGenerator.jsx`
- **Purpose**: Creates QR codes for various system functions
- **Key Features**:
  - Dynamic QR code generation
  - Customizable appearance
  - Download/share options
  - Expiration settings
- **Props**:
  - `value`: Data to encode in QR
  - `size`: QR code dimensions
  - `level`: Error correction level
  - `includeMargin`: Whether to add margin

#### DataTable
- **Location**: `/src/components/common/DataTable.jsx`
- **Purpose**: Reusable table component for displaying data sets
- **Key Features**:
  - Sorting and filtering
  - Pagination
  - Row selection
  - Export functionality
- **Props**:
  - `columns`: Column definitions
  - `data`: Data array
  - `pagination`: Pagination settings
  - `onRowClick`: Row click handler

#### NotificationCenter
- **Location**: `/src/components/common/NotificationCenter.jsx`
- **Purpose**: Manages and displays system notifications
- **Key Features**:
  - Real-time notification display
  - Notification categorization
  - Read/unread status tracking
  - Action links
- **Props**:
  - `notifications`: Array of notification objects
  - `onRead`: Callback when notification is read
  - `onAction`: Callback for notification actions

### Additional Pages

#### Homepage
- **Location**: `src/pages/Homepage.jsx`
- **Purpose**: Displays the home page content, providing a welcome message and relevant information.
- **Key Features**:
  - Provides a welcome message to the user.
  - Displays relevant information about the hostel management system.
- **Related Components**: None
- **Data Sources**: None
- **Usage**: Accessed by all users who visit the root URL of the application.

#### Complaints
- **Location**: `src/pages/Complaints.jsx`
- **Purpose**: Displays a list of complaints.
- **Key Features**:
  - Displays a list of complaints.
  - Allows users to view complaint details.
- **Related Components**: None
- **Data Sources**: Fetches complaint data from the backend API using `src/services/api.js`.
- **Usage**: Accessed by users who have the appropriate permissions.

#### Students
- **Location**: `src/pages/Students.jsx`
- **Purpose**: Displays a list of students.
- **Key Features**:
  - Displays a list of students.
  - Allows users to view student details.
- **Related Components**: None
- **Data Sources**: Fetches student data from the backend API using `src/services/api.js`.
- **Usage**: Accessed by users who have the appropriate permissions.

#### Events
- **Location**: `src/pages/Events.jsx`
- **Purpose**: Displays a list of events.
- **Key Features**:
  - Displays a list of events.
  - Allows users to view event details.
- **Related Components**: None
- **Data Sources**: Fetches event data from the backend API using `src/services/api.js`.
- **Usage**: Accessed by users who have the appropriate permissions.

#### VisitorRequests
- **Location**: `src/pages/VisitorRequests.jsx`
- **Purpose**: Displays a list of visitor requests.
- **Key Features**:
  - Displays a list of visitor requests.
  - Allows users to view visitor request details.
- **Related Components**: None
- **Data Sources**: Fetches visitor request data from the backend API using `src/services/api.js`.
- **Usage**: Accessed by users who have the appropriate permissions.

#### LostAndFound
- **Location**: `src/pages/LostAndFound.jsx`
- **Purpose**: Displays a list of lost and found items.
- **Key Features**:
  - Displays a list of lost and found items.
  - Allows users to view lost and found item details.
- **Related Components**: None
- **Data Sources**: Fetches lost and found item data from the backend API using `src/services/api.js`.
- **Usage**: Accessed by users who have the appropriate permissions.

#### Profile
- **Location**: `src/pages/Profile.jsx`
- **Purpose**: Displays the user's profile.
- **Key Features**:
  - Displays the user's profile.
  - Allows users to edit their profile.
- **Related Components**: None
- **Data Sources**: Fetches user profile data from the backend API using `src/services/api.js`.
- **Usage**: Accessed by logged-in users.

#### NotificationCenter
- **Location**: `src/pages/NotificationCenter.jsx`
- **Purpose**: Displays system notifications.
- **Key Features**:
  - Displays system notifications.
  - Allows users to view notification details.
- **Related Components**: `src/components/common/NotificationCenter.jsx`
- **Data Sources**: Fetches notification data from the backend API using `src/services/api.js`.
- **Usage**: Accessed by users who have the appropriate permissions.

#### Settings
- **Location**: `src/pages/Settings.jsx`
- **Purpose**: Allows users to manage their account settings.
- **Key Features**:
  - Change password.
  - Update contact information.
- **Related Components**: None
- **Data Sources**: Updates user settings in the backend API using `src/services/api.js`.
- **Usage**: Accessed by logged-in users.

### Route Configuration

#### AppRoutes
- **Location**: `src/routes/AppRoutes.jsx`
- **Purpose**: Defines all the routes for the application and their corresponding components.
- **Key Features**:
  - Defines routes for different user roles (Admin, Student, Warden, Security, Maintenance).
  - Uses `ProtectedRoute` to protect routes based on user roles.
  - Defines routes for all pages in the application.
- **Related Components**: All page and layout components.
- **Data Sources**: Uses `AuthProvider` to determine the user's role.
- **Usage**: Used by the `App` component to render the application's routes.

### Context Providers

#### AuthProvider
- **Location**: `src/contexts/AuthProvider.jsx`
- **Purpose**: Manages user authentication state and provides login/logout functionality.
- **Key Features**:
  - Stores user authentication token.
  - Provides login and logout functions.
  - Provides user role information.
- **Related Components**: 
  - `src/pages/auth/Login.jsx`
  - `src/layouts/AdminLayout.jsx`
  - `src/layouts/StudentLayout.jsx`
  - `src/layouts/WardenLayout.jsx`
  - `src/layouts/SecurityLayout.jsx`
  - `src/layouts/MaintenanceLayout.jsx`
  - `src/routes/AppRoutes.jsx`
- **Data Sources**: Stores user authentication token in local storage.
- **Usage**: Wraps the entire application to provide authentication context.

#### AdminProvider
- **Location**: `src/contexts/AdminProvider.jsx`
- **Purpose**: Provides context for admin-specific data and functionality.
- **Key Features**:
  - Stores admin-specific data.
  - Provides admin-specific functions.
- **Related Components**: 
  - `src/layouts/AdminLayout.jsx`
  - `src/pages/admin/Dashboard.jsx`
- **Data Sources**: Fetches admin-specific data from the backend API using `src/services/api.js`.
- **Usage**: Wraps admin-specific pages.

#### StudentProvider
- **Location**: `src/contexts/StudentProvider.jsx`
- **Purpose**: Provides context for student-specific data and functionality.
- **Key Features**:
  - Stores student-specific data.
  - Provides student-specific functions.
- **Related Components**: 
  - `src/layouts/StudentLayout.jsx`
  - `src/pages/student/Dashboard.jsx`
- **Data Sources**: Fetches student-specific data from the backend API using `src/services/api.js`.
- **Usage**: Wraps student-specific pages.

#### WardenProvider
- **Location**: `src/contexts/WardenProvider.jsx`
- **Purpose**: Provides context for warden-specific data and functionality.
- **Key Features**:
  - Stores warden-specific data.
  - Provides warden-specific functions.
- **Related Components**: 
  - `src/layouts/WardenLayout.jsx`
  - `src/pages/warden/Dashboard.jsx`
- **Data Sources**: Fetches warden-specific data from the backend API using `src/services/api.js`.
- **Usage**: Wraps warden-specific pages.

#### SecurityProvider
- **Location**: `src/contexts/SecurityProvider.jsx`
- **Purpose**: Provides context for security-specific data and functionality.
- **Key Features**:
  - Stores security-specific data.
  - Provides security-specific functions.
- **Related Components**: 
  - `src/layouts/SecurityLayout.jsx`
  - `src/pages/guard/Dashboard.jsx`
- **Data Sources**: Fetches security-specific data from the backend API using `src/services/api.js`.
- **Usage**: Wraps security-specific pages.

### API Service

#### api.js
- **Location**: `src/services/api.js`
- **Purpose**: Handles communication with the backend API, providing functions for making HTTP requests and handling responses.
- **Key Features**:
  - Provides functions for making HTTP requests (GET, POST, PUT, DELETE) with proper headers and authentication tokens.
  - Handles API responses, including error handling and data parsing.
  - Manages API endpoints and base URLs.
- **Related Components**: All components that interact with the backend API.
- **Data Sources**: Configured with the base URL of the backend API.
- **Usage**: Used by various components to fetch and update data from the backend.

### Constant Values

#### adminConstants.js
- **Location**: `src/constants/adminConstants.js`
- **Purpose**: Defines constant values used in the admin section of the application.
- **Key Features**:
  - Defines filter tabs for wardens and complaints.
  - Defines filter tabs for hostels.
- **Related Components**: 
  - `src/pages/admin/Wardens.jsx`
  - `src/pages/admin/Complaints.jsx`
  - `src/pages/admin/Hostels.jsx`
- **Data Sources**: None
- **Usage**: Used to configure the UI for filtering data in the admin section.

### Other Files

#### App.jsx
- **Location**: `src/App.jsx`
- **Purpose**: Main application component that renders the layout and routes.
- **Key Features**:
  - Sets up routing for different pages.
  - Provides the main application layout.
- **Related Components**: `src/routes/AppRoutes.jsx`
- **Data Sources**: None
- **Usage**: The root component of the application.

#### main.jsx
- **Location**: `src/main.jsx`
- **Purpose**: Entry point of the application.
- **Key Features**:
  - Renders the `App` component into the `root` element in `index.html`.
  - Sets up React context providers.
- **Related Components**: 
  - `src/App.jsx`
  - `src/index.html`
- **Data Sources**: None
- **Usage**: The first file that is executed when the application starts.

#### vite.config.js
- **Location**: `src/vite.config.js`
- **Purpose**: Configuration file for Vite, the build tool used for the project.
- **Key Features**:
  - Configures plugins, such as `tailwindcss` and `react`.
  - Configures the build process.
  - Configures the development server.
- **Related Components**: None
- **Data Sources**: None
- **Usage**: Used by Vite to build and serve the application.

#### tailwind.config.js
- **Location**: `src/tailwind.config.js`
- **Purpose**: Configuration file for Tailwind CSS, the CSS framework used for the project.
- **Key Features**:
  - Configures the theme.
  - Configures the variants.
  - Configures the plugins.
- **Related Components**: None
- **Data Sources**: None
- **Usage**: Used by Tailwind CSS to style the application.

#### index.html
- **Location**: `index.html`
- **Purpose**: HTML entry point for the application.
- **Key Features**:
  - Defines the HTML structure of the application.
  - Includes the `root` element where the React application is rendered.
  - Includes the application's favicon and title.
- **Related Components**: `src/main.jsx`
- **Data Sources**: None
- **Usage**: The first file that is loaded when the application is accessed in a browser.

#### .gitignore
- **Location**: `.gitignore`
- **Purpose**: Specifies intentionally untracked files that Git should ignore.
- **Key Features**:
  - Excludes files and directories such as `node_modules`, `dist`, and `.vscode`.
- **Related Components**: None
- **Data Sources**: None
- **Usage**: Used by Git to determine which files should not be tracked.

### ModernHeader.jsx
- **Location**: `src\components\home\ModernHeader.jsx`
- **Purpose**: To create a modern-looking header for the homepage with navigation links and a responsive design.
- **Key Features**:
  - Displays the IIT Indore logo and application title.
  - Provides navigation links to different sections of the application and external resources.
  - Implements a scroll-based effect to change the header style when the user scrolls down the page.
- **Related Components**: None
- **Data Sources**: None
- **Usage**: Used in the Homepage.jsx to display the header section.

### Sidebar.jsx
- **Location**: `src\components\Sidebar.jsx`
- **Purpose**: To create a reusable sidebar component for navigation across different user roles.
- **Key Features**:
  - Displays navigation items based on the user's role.
  - Supports collapsible/expandable design for better screen space management.
  - Includes the IIT Indore logo and application title.
- **Related Components**: None
- **Data Sources**: None
- **Usage**: Used in layout components such as AdminLayout, StudentLayout, WardenLayout, SecurityLayout, and AssociateWardenLayout.

## User Roles and Workflows

### Admin Workflow
1. **System Configuration**
   - Set up hostels, buildings, and room types
   - Configure system parameters and policies
   - Manage user roles and permissions

2. **User Management**
   - Create and manage user accounts
   - Assign roles and permissions
   - Handle user deactivation and data management

3. **Reporting and Analytics**
   - Generate occupancy reports
   - Track financial data
   - Monitor system usage and performance

### Student Workflow
1. **Registration and Onboarding**
   - Create account and complete profile
   - Submit required documentation
   - Complete hostel preferences

2. **Room Management**
   - View available rooms and submit preferences
   - Request room changes or maintenance
   - Manage roommate relationships

3. **Daily Operations**
   - Check in/out using QR codes
   - Submit and track maintenance requests
   - View announcements and notifications

### Warden Workflow
1. **Hostel Management**
   - Monitor hostel occupancy and status
   - Handle student check-ins and check-outs
   - Manage room allocations and changes

2. **Request Processing**
   - Review and approve/reject student requests
   - Coordinate maintenance activities
   - Handle special accommodations

3. **Communication and Reporting**
   - Create and publish announcements
   - Generate attendance and occupancy reports
   - Communicate with students and administration

## Technical Implementation

### Frontend Technologies
- React 19 for UI components
- Tailwind CSS for styling
- Chart.js for data visualization
- React Router for navigation
- Vite for build and development

### PWA Implementation
The application is configured as a Progressive Web App (PWA) using vite-plugin-pwa, providing:
- Offline functionality
- Installation on devices
- Push notifications
- Fast loading times

### Authentication
- Google OAuth integration
- JWT-based authentication
- Role-based access control
- Secure session management

### Data Management
- RESTful API integration
- Local state management with React hooks
- Context API for global state
- Optimistic UI updates

## Getting Started

### Development Setup
1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Access the application at `http://localhost:5173`

### Building for Production
1. Run `npm run build`
2. The built application will be in the `dist` directory
3. Deploy the contents of the `dist` directory to your hosting provider

### Configuration
Key configuration files:
- `vite.config.js` - Build and development settings
- `tailwind.config.js` - UI styling configuration
- `eslint.config.js` - Code quality rules