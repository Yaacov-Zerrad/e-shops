# Generated by Django 4.0.5 on 2022-06-28 18:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
        migrations.AddField(
            model_name='product',
            name='Category',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='category', to='shop.category'),
            preserve_default=False,
        ),
    ]
