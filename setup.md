# TechnoGen Blog Platform - Setup Guide

## Prerequisites

Before you begin, ensure you have installed:
- Python 3.10 or higher
- Node.js 18.x or higher
- MySQL 8.0 or higher
- Git

## Project Structure
```
TechnoGenSiteDir/
├── frontend/                    # Next.js frontend
│   │   ├── blog/              # Blog pages
│   │   │   ├── [id]/         # Dynamic blog post page
│   │   │   └── loading.tsx   # Loading states
│   │   ├── components/       # Reusable components
│   │   └── styles/          # Global styles
│   ├── public/              # Static assets
│   └── src/
│       └── config/         # API configuration
├── TechnoGen/              # Django backend
│   ├── blog/              # Blog app
│   │   ├── migrations/   
│   │   ├── static/      # Static files
│   │   │   ├── css/    # Custom CSS
│   │   │   └── js/     # CKEditor plugins
│   │   └── templates/  # Django templates
│   ├── media/         # Uploaded files
│   └── TechnoGen/    # Project settings
```

## Step-by-Step Installation

### 1. Clone and Setup Environment
```bash
# Clone repository
git clone <your-repo-url>
cd TechnoGenSiteDir

# Create and activate virtual environment
python -m venv myenv
# On Windows:
myenv\Scripts\activate
# On Unix/MacOS:
source myenv/bin/activate
```

### 2. Backend Setup

#### 2.1 Install Python Dependencies
```bash
pip install -r requirements.txt
```

#### 2.2 Database Setup
```sql
# Access MySQL
mysql -u root -p

# In MySQL prompt:
CREATE DATABASE technogen_db;
CREATE USER 'technogen_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON technogen_db.* TO 'technogen_user'@'localhost';
FLUSH PRIVILEGES;
exit;
```

#### 2.3 Environment Configuration
Create `TechnoGen/TechnoGen/.env`:
```env
# Database settings
DB_NAME=technogen_db
DB_USER=technogen_user
DB_PASSWORD=your_password
DB_HOST=127.0.0.1
DB_PORT=3306

# Site URL
SITE_URL=http://localhost:8000

# Django Secret Key
SECRET_KEY=your-secret-key-here

# Debug mode
DEBUG=True
```

#### 2.4 Django Setup
```bash
cd TechnoGen

# Apply migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Collect static files
python manage.py collectstatic
```

### 3. Frontend Setup

#### 3.1 Install Node Dependencies
```bash
cd frontend
npm install
```

#### 3.2 Frontend Environment
Create `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### 4. Running the Project

#### 4.1 Start Backend
```bash
# In TechnoGen directory
python manage.py runserver
```

#### 4.2 Start Frontend
```bash
# In frontend directory
npm run dev
```

### 5. Access Points
- Frontend: http://localhost:3000
- Admin Panel: http://localhost:8000/admin
- API: http://localhost:8000/api

## Configuration Details

### Important Files
1. `TechnoGen/settings.py`: Main Django settings
2. `frontend/app/layout.tsx`: Root layout for Next.js
3. `frontend/tailwind.config.js`: Tailwind CSS configuration
4. `TechnoGen/static/js/ckeditor-custom-plugins.js`: CKEditor customizations

### CKEditor Setup
The project uses CKEditor 5 with custom plugins for:
- Image uploads
- URL-based images
- Image alignment
- Custom styling

## Common Issues & Solutions

### Backend Issues
1. **Database Connection**
   - Verify MySQL service is running
   - Check credentials in .env file
   - Ensure database exists

2. **Static Files**
   - Run collectstatic
   - Check STATIC_ROOT path
   - Verify file permissions

### Frontend Issues
1. **API Connection**
   - Ensure backend is running
   - Check CORS settings
   - Verify API URL in .env.local

2. **Build Issues**
   - Clear .next directory
   - Update node modules
   - Check TypeScript errors

## Development Workflow

1. **Blog Post Creation**
   - Access admin panel
   - Use CKEditor for content
   - Add tags and images
   - Preview before publishing

2. **Frontend Development**
   - Components in `frontend/app/components`
   - Styles in `frontend/app/styles`
   - API config in `frontend/src/config`

## Additional Notes

### Media Files
- Uploads stored in `TechnoGen/media/`
- Configure S3 for production
- Handle image optimization

### Security
- Update SECRET_KEY in production
- Configure proper CORS settings
- Set DEBUG=False in production

### Performance
- Enable caching in production
- Optimize image delivery
- Configure proper server setup

Need help? Create an issue or contact [your-contact-info]