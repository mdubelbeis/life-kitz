# Generated by Django 4.2 on 2023-04-05 22:29

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("notes", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="note",
            name="user",
        ),
    ]
