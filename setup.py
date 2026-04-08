from setuptools import setup, find_packages

setup(
    name="agri_dms",
    version="1.0.0",
    description="Distributor Management System",
    author="Agri-DMS Team",
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=[
        "fastapi",
        "pydantic"
    ]
)
