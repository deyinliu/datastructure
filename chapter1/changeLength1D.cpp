#include "iostream"

using namespace std;
template<class T>
void changeLength1D(T*& a, int oldLength, int newLength)
{
   if (newLength < 0){
       throw string("new length must be >= 0");
   }

   T* temp = new T[newLength];
   int number = min(oldLength, newLength); 
   
   for(int i = 0; i < newLength; i++)
   {
       temp[i] = i+1;
   }
   copy(a, a + number, temp);
   delete []a;
   
   for(int i = 0; i < newLength; i++)
   {
       cout<< temp[i] <<endl;
   }
   
}

int main(int argc, char const *argv[])
{
    int *a = new int[3];
    
    for(int i = 0; i < 3; i++)
    {
        cout<< a[i] <<endl;
    }
    
    try{
        changeLength1D(a , 3 , 4);
    }catch(bad_alloc){
        cout<< "error" << endl;
    }
}
