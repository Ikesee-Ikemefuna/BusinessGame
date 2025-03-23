# Skill Share Project

## Overview
Skill Share is a platform where individuals can find others within their region who possess skills they seek. They can propose to exchange skills with these individuals. If they do not have a skill to offer in return, they can transfer tokens from their account to the other person as compensation. The platform also includes a review system to ensure trust and quality interactions.

## Tech Stack
- **Language**: Python (FastAPI)
- **Database**: PostgreSQL
- **ORM**: SQLAlchemy
- **Migrations**: Alembic

## Features
- Skill exchange between individuals
- Token-based transactions for skill-sharing
- Geolocation-based matching
- Review and rating system
- Secure authentication and authorization
- CRUD operations for user profiles, skills, and transactions

## Project Structure
```
app/
 ├── config/                  # Configuration files
 ├── core/
 │   ├── admin/               # Admin panel functionality
 │   ├── auth/                # Authentication and authorization
 │   ├── notification/        # Notification system
 │   ├── reviews/             # User reviews and ratings
 │   ├── skill_share/         # Skill exchange logic
 │   ├── skills/              # Skill management
 │   ├── users/               # User management
 ├── utils/                   # Utility functions
 │   ├── crud/                # CRUD operations
 │   ├── logger/              # Logging utilities
 │   ├── types_utils/         # Data type utilities
 │   ├── password_hash.py     # Password hashing utility
 │   ├── my_jwt.py            # JWT authentication handler
 │   ├── query.py             # Query helpers
 │   ├── response_message.py  # Standard response messages
 │   ├── uuid_generator.py    # UUID generation for unique IDs
 ├── versions/                # Alembic migrations
 ├── alembic/                 # Database migrations and versions
 ├── main.py                  # FastAPI entry point
 ├── requirements.txt         # Dependencies
 ├── README.md                # Documentation
```

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/preciousekenenkwor/skill_share-m.git
   cd skill-share-m
   ```
2. **Create a virtual environment and install dependencies**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```
3. **Set up environment variables**
   Create a `.env` file and configure it with the required settings:
   ```ini
   DATABASE_URL=postgresql://user:password@localhost/skillshare
   SECRET_KEY=your_secret_key
   ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=30
   ```
4. **Run database migrations**
   ```bash
   alembic upgrade head
   ```
5. **Start the FastAPI server**
   ```bash
   uvicorn main:app --reload
   ```

## API Endpoints
### Authentication
- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Authenticate a user
- `POST /auth/refresh` - Refresh authentication token

### Users
- `GET /users/` - Get all users
- `GET /users/{id}` - Get a specific user
- `PUT /users/{id}` - Update user profile
- `DELETE /users/{id}` - Delete user account

### Skills
- `POST /skills/` - Add a new skill
- `GET /skills/` - Get all skills
- `DELETE /skills/{id}` - Remove a skill

### Skill Exchange
- `POST /skill_share/propose` - Propose a skill exchange
- `POST /skill_share/accept/{id}` - Accept an exchange
- `POST /skill_share/reject/{id}` - Reject an exchange
- `POST /skill_share/complete/{id}` - Mark exchange as complete

### Reviews
- `POST /reviews/` - Submit a review
- `GET /reviews/{user_id}` - Get reviews for a user

## Contributing
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License
This project is licensed under the MIT License.

## Contact
For inquiries, reach out via email: `` or open an issue on GitHub.



