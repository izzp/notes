## 编程题

### 一、存储过程(sql写法)

#### 1.查询

~~~sql
CREATE PROCEDURE pro_Read
	@UserName nvarchar(50),
	@UserPassword nvarchar(50)
AS
BEGIN
	select * from UserInfo where UserName=@UserName and UserPassword=@UserPassword
END
~~~

#### 2.增加

~~~sql
CREATE PROCEDURE pro_Writer
	@UserName nvarchar(50),
	@UserPassword nvarchar(50),
	@UserType nvarchar(10)
AS
BEGIN
	insert into UserInfo Values(@UserName,@UserPassword,@UserType)
END
~~~

#### 3.修改

~~~sql
CREATE PROCEDURE Pro_Update
	@UserName nvarchar(50),
	@UserPassword nvarchar(50),
	@UserType nvarchar(10)
AS
BEGIN
	UPDATE UserInfo SET UserPassword=@UserPassword,UserType=@UserType WHERE UserName=@UserName 
END
~~~

#### 4.删除

~~~ sql
CREATE PROCEDURE Pro_Del
	 @UserName nvarchar(50)
AS
BEGIN
	DELETE UserInfo WHERE UserName=@UserName
END
~~~

### 二、MD5加密(了解)

~~~ c#
  private string ToMD5(string str)
  {
      byte[] mingWen = Encoding.UTF8.GetBytes(str);
      MD5 md5 = new MD5CryptoServiceProvider();
      byte[] miWen = md5.ComputeHash(mingWen);
      return BitConverter.ToString(miWen).Replace("-", "");
  }
~~~

### 三、类库

#### 1.用户类

~~~c#
string userName;
string password;
public string UserName
{
    get { return userName; }
    set { userName = value; }
}
public string Password
{
    get { return password; }
    set { password = value; }
}
~~~

#### 2.txt类模板

~~~c#
static string path = @"../../users.txt";
public static bool Writer(Users u)
{
    bool result = false;
    StreamWriter sw = null;
    string line = u.UserName + '\t' + u.Password;
    try
    {
        sw = new StreamWriter(path, true, Encoding.UTF8);
        sw.WriteLine(line);
        sw.Close();
    }
    catch(Exception ex)
    {
        throw ex;
    }
    finally
    {
        result = true;
    }
    return result;
}
public static bool Reader(Users u)
{
    bool result = false;
    StreamReader sr = null;
    try
    {
        sr = new StreamReader(path, Encoding.UTF8);
        string[] strs;
        string line;
        while ((line = sr.ReadLine()) != null)
        {
            strs = line.Split('\t');
            if(strs[0]==u.UserName&&strs[1]==u.Password)
            {
                result = true;
            }
        }
    }
    catch(Exception ex)
    {
        throw ex;
    }
    finally
    {
        sr.Close();
    }
    return result;
}
public static bool Reader(string userName)
{
    bool result = false;
    StreamReader sr = null;
    try
    {
        sr = new StreamReader(path, Encoding.UTF8);
        string[] strs;
        string line;
        while ((line = sr.ReadLine()) != null)
        {
            strs = line.Split('\t');
            if (strs[0] == userName)
            {
                result = true;
            }
        }
    }
    catch (Exception ex)
    {
        throw ex;
    }
    finally
    {
        sr.Close();
    }
    return result;
}
~~~

#### 3.xml模板类

~~~ c#
static string path = @"../../users.xml";
public static bool Writer(Users u)
{
    bool result = false;
    try
    {
        XElement user = XElement.Load(path);
        user.Add("users",
                 new XElement("user",
                              new XElement("username", u.UserName),
                              new XElement("password", u.Password)
                             )
                );
        user.Save(path);
    }
    catch(Exception ex)
    {
        throw ex;
    }
    finally
    {
        result = true;
    }
    return result;
}
public static bool Reader(Users u)
{
    bool result = false;
    try
    {
        XElement user = XElement.Load(path);
        foreach(var v in user.Elements())
        {
            if(v.Element("username").Value==u.UserName&&v.Element("password").Value==u.Password)
            {
                result = true;
                return result;
            }
        }
    }
    catch(Exception ex)
    {
        throw ex;
    }
    finally
    {

    }
    return result;
}
public static bool Reader(string userName)
{
    bool result = false;
    try
    {
        XElement user = XElement.Load(path);
        foreach (var v in user.Elements())
        {
            if (v.Element("username").Value == userName)
            {
                result = true;
                return result;
            }
        }
    }
    catch (Exception ex)
    {
        throw ex;
    }
    finally
    {

    }
    return result;
}
~~~

#### 4.数据库类模板(直连数据库)

~~~c#
static SqlConnection conn = null;
static string path = @"Data Source=WP521\WANGPENG;Initial Catalog=users;Integrated Security=True";
public static int Writer(string sql)
{
    try
    {
        conn = new SqlConnection(path);
        conn.Open();
        SqlCommand comm = new SqlCommand(sql, conn);
        return comm.ExecuteNonQuery();
    }
    catch(Exception ex)
    {
        throw ex;
    }
    finally
    {
        conn.Close();
    }
}
public static int Reader(string sql)
{
    try
    {
        conn = new SqlConnection(path);
        conn.Open();
        SqlCommand comm = new SqlCommand(sql,conn);
        SqlDataReader reader = comm.ExecuteReader();
        if (reader.HasRows)
            return 1;
        else
        {
            return 0;
        }
    }
    catch(Exception ex)
    {
        throw ex;
    }
    finally
    {
        conn.Close();
    }
}
public static int Reader(string sql,Users u)
{
    int x = 0;
    try
    {
        conn = new SqlConnection(path);
        conn.Open();
        SqlCommand comm = new SqlCommand(sql, conn);
        SqlDataReader reader = comm.ExecuteReader();
        if (reader.HasRows)
        {
            while(reader.Read())
            {
                if (reader.GetString(0) == u.UserName)
                    return 1;
                else
                    return 0;
            }
        }
    }
    catch (Exception ex)
    {
        throw ex;
    }
    finally
    {
        conn.Close();
    }
    return x;
}
~~~

#### 5.数据库类模板(存储过程)

~~~ c#
static SqlConnection conn = null;
static string path = @"Data Source=506_64;Initial Catalog=users;Integrated Security=True";
public static int Writer(Users u)	
{
    try
    {
        conn = new SqlConnection(path);
        conn.Open();
        SqlCommand comm = new SqlCommand("pro_Writer", conn);
        comm.CommandType = CommandType.StoredProcedure;
        comm.Parameters.Add("@userName", SqlDbType.NVarChar, 50).Value = u.UserName;
        comm.Parameters.Add("@password", SqlDbType.NVarChar, 50).Value = u.Password;
        return comm.ExecuteNonQuery();
    }
    catch(Exception ex)
    {
        throw ex;
    }
    finally
    {
        conn.Close();
    }
}
public static int Reader(Users u)
{
    try
    {
        conn = new SqlConnection(path);
        conn.Open();
        SqlCommand comm = new SqlCommand("pro_Read",conn);
        comm.CommandType = CommandType.StoredProcedure;
        comm.Parameters.Add("@userName", SqlDbType.NVarChar, 50).Value = u.UserName;
        comm.Parameters.Add("@password", SqlDbType.NVarChar, 50).Value = u.Password;
        SqlDataReader reader = comm.ExecuteReader();
        if (reader.HasRows)
            return 1;
        else
        {
            return 0;
        }
    }
    catch(Exception ex)
    {
        throw ex;
    }
    finally
    {
        conn.Close();
    }
}
public static int Update(Users u)
{
    try
    {
        conn = new SqlConnection(path);
        conn.Open();
        SqlCommand comm = new SqlCommand("Pro_Update", conn);
        comm.CommandType = CommandType.StoredProcedure;
        comm.Parameters.Add("@userName", SqlDbType.NVarChar, 50).Value = u.UserName;
        comm.Parameters.Add("@password", SqlDbType.NVarChar, 50).Value = u.Password;
        return comm.ExecuteNonQuery();
    }
    catch (Exception ex)
    {
        throw ex;
    }
    finally
    {
        conn.Close();
    }
}
public static int Delete(Users u)
{
    try
    {
        conn = new SqlConnection(path);
        conn.Open();
        SqlCommand comm = new SqlCommand("Pro_Del", conn);
        comm.CommandType = CommandType.StoredProcedure;
        comm.Parameters.Add("@userName", SqlDbType.NVarChar, 50).Value = u.UserName;
        return comm.ExecuteNonQuery();
    }
    catch (Exception ex)
    {
        throw ex;
    }
    finally
    {
        conn.Close();
    }
}
~~~

#### 6.数据库类模板(命名参数)

~~~ c#
/// <summary>
/// 增加一条数据
/// </summary>
public int Add(Model.Department model)
{
    StringBuilder strSql = new StringBuilder();
    strSql.Append("insert into Department(");
    strSql.Append("DepartmentName,HeadOfDepartment,DepartmentPhone)");
    strSql.Append(" values (");
    strSql.Append("@DepartmentName,@HeadOfDepartment,@DepartmentPhone)");
    strSql.Append(";select @@IDENTITY");
    SqlParameter[] parameters = {
        new SqlParameter("@DepartmentName", SqlDbType.NVarChar,50),
        new SqlParameter("@HeadOfDepartment", SqlDbType.NVarChar,50),
        new SqlParameter("@DepartmentPhone", SqlDbType.NVarChar,50)};
    parameters[0].Value = model.DepartmentName;
    parameters[1].Value = model.HeadOfDepartment;
    parameters[2].Value = model.DepartmentPhone;
    int result = 0;
    result = DAL.DBHelper.ExecuteSql(strSql.ToString(), CommandType.Text, parameters);
    if (result > 0)
        return result;
    return result;
}

/// <summary>
/// 更新一条数据
/// </summary>
public bool Update(Model.Department model)
{
    StringBuilder strSql = new StringBuilder();
    strSql.Append("update Department set ");
    strSql.Append("DepartmentName=@DepartmentName,");
    strSql.Append("HeadOfDepartment=@HeadOfDepartment,");
    strSql.Append("DepartmentPhone=@DepartmentPhone");
    strSql.Append(" where DepartmentID=@DepartmentID");
    SqlParameter[] parameters = {
        new SqlParameter("@DepartmentName", SqlDbType.NVarChar,50),
        new SqlParameter("@HeadOfDepartment", SqlDbType.NVarChar,50),
        new SqlParameter("@DepartmentPhone", SqlDbType.NVarChar,50),
        new SqlParameter("@DepartmentID", SqlDbType.Int,4)};
    parameters[0].Value = model.DepartmentName;
    parameters[1].Value = model.HeadOfDepartment;
    parameters[2].Value = model.DepartmentPhone;
    parameters[3].Value = model.DepartmentID;

    int rows = DBHelper.ExecuteSql(strSql.ToString(), CommandType.Text, parameters);
    if (rows > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/// <summary>
/// 删除一条数据
/// </summary>
public bool Delete(Model.Department model)
{

    StringBuilder strSql = new StringBuilder();
    strSql.Append("delete from Department ");
    strSql.Append(" where DepartmentID=@DepartmentID");
    SqlParameter[] parameters = {
        new SqlParameter("@DepartmentID", SqlDbType.Int,4)
    };
    parameters[0].Value = model.DepartmentID;

    int rows = DBHelper.ExecuteSql(strSql.ToString(), CommandType.Text, parameters);
    if (rows > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/// <summary>
/// 获得数据列表
/// </summary>
public DataSet GetList(string strWhere)
{
    StringBuilder strSql = new StringBuilder();
    strSql.Append("select DepartmentID,DepartmentName,HeadOfDepartment,DepartmentPhone ");
    strSql.Append(" FROM Department ");
    if (strWhere.Trim() != "")
    {
        strSql.Append(" where " + strWhere);
    }
    return DBHelper.SelectToDS(strSql.ToString(), CommandType.Text);
}

/// <summary>
/// 获得数据列表，无参数
/// </summary>
public DataSet GetList()
{
    StringBuilder strSql = new StringBuilder();
    strSql.Append("select DepartmentID,DepartmentName,HeadOfDepartment,DepartmentPhone ");
    strSql.Append(" FROM Department ");
    return DBHelper.SelectToDS(strSql.ToString(),CommandType.Text);
}
~~~



