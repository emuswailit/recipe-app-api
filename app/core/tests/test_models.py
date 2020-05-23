from django.test import TestCase
from django.contrib.auth import get_user_model


class ModelTests(TestCase):
    def test_create_user_with_email_succesful(self):
        """Test creating a user with an email is succesfull"""
        email = "test@email.com"
        password = "TestPass123"
        user = get_user_model().objects.create_user(
            email=email,
            password=password
        )

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

    def test_new_user_email_normolized(self):
        """Test that new user email is normolized"""
        email = 'test@EMAIL.com'
        user = get_user_model().objects.create_user(email, 'TestPass123')
        self.assertEqual(user.email, email.lower())

    def test_new_user_invalid_email(self):
        """Test creating user with no email raises error"""
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(None, 'TestPass123')

    def test_create_new_super_user(self):
        """Test create new super user"""
        user = get_user_model().objects.create_superuser(
            'test@email.com',
            'testpass123',
        )
        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)
