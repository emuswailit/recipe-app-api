from django.test import TestCase
from django.contrib.auth import get_user_model
from core import models


def sample_user(email='test@email.com', password='testpass123'):
    """Create a sample user"""
    return get_user_model().objects.create_user(email, password)


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

    def test_tag_str(self):
        """Test a tag string reprresentation"""
        tag = models.Tag.objects.create(
            user=sample_user(),
            name='Vegan'
        )
        self.assertEqual(str(tag), tag.name)

    def test_ingredient_str(self):
        """test the ingredient string representation"""
        ingredient = models.Ingredient.objects.create(
            user=sample_user(),
            name='Cucumber'
        )
        self.assertEqual(str(ingredient), ingredient.name)

    def test_recipe_str(self):
        """test the recipe string representation"""
        recipe = models.Recipe.objects.create(
            user=sample_user(),
            title='Steak and mushroom sauce',
            time_minutes=5,
            price=5.00
        )

        self.assertEqual(str(recipe), recipe.title)
